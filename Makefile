define DESCRIPTION
Code quality (testing, linting/auto-formatting, etc.) and local execution
orchestration for $(PROJECT_NAME).
endef

#################################################################################
# CONFIGURATIONS                                                                #
#################################################################################

MAKEFLAGS += --warn-undefined-variables
SHELL := bash
.SHELLFLAGS := -eu -o pipefail -c
.DEFAULT_GOAL := help
.DELETE_ON_ERROR:
.SUFFIXES:

#################################################################################
# GLOBALS                                                                       #
#################################################################################

REGISTRY_NAMESPACE = teozosa
PROJECT_DIR := $(shell dirname $(realpath $(lastword $(MAKEFILE_LIST))))
PROJECT_NAME := $(shell basename $(PROJECT_DIR))
DOCKER_REPOSITORY = $(REGISTRY_NAMESPACE)/$(PROJECT_NAME)

# List any changed files (excluding submodules)
CHANGED_FILES := $(shell git diff --name-only)

ifeq ($(strip $(CHANGED_FILES)),)
GIT_VERSION := $(shell git describe --tags --long --always)
else
diff_checksum := $(shell git diff | shasum -a 256 | cut -c -6)
GIT_VERSION := $(shell git describe --tags --long --always --dirty)-$(diff_checksum)
endif
TAG := $(shell date +v%Y%m%d)-$(GIT_VERSION)

IMG := $(DOCKER_REPOSITORY):$(TAG)
LATEST_IMG := $(DOCKER_REPOSITORY):latest

#################################################################################
# HELPER TARGETS                                                                #
#################################################################################

.PHONY: get-make-var-%
get-make-var-%:
	@echo $($*)

# Check that given variables are set and all have non-empty values,
# die with an error otherwise.
#
# Params:
#   1. Variable name(s) to test.
#   2. (optional) Error message to print.
check_defined = \
	$(strip $(foreach 1,$1, \
		$(call __check_defined,$1,$(strip $(value 2)))))
__check_defined = \
	$(if $(value $1),, \
	  $(error Undefined $1$(if $2, ($2))))

.PHONY: validate_req_env_vars
validate_req_env_vars:
	$(call check_defined, REQ_ENV_VARS, Error: Required list of env vars to validate as defined not set!)
	$(foreach REQ_ENV_VAR,$(REQ_ENV_VARS),$(call check_defined, $(REQ_ENV_VAR), Error: Required env var not set!))

.PHONY: strong-version-tag
strong-version-tag: get-make-var-TAG

.PHONY: strong-version-tag-dateless
strong-version-tag-dateless: get-make-var-GIT_VERSION

.PHONY: update-dependencies
## Install Python dependencies,
## updating packages in `poetry.lock` with any newer versions specified in
## `pyproject.toml`, and install cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance source code
update-dependencies:
	poetry update --lock
ifneq (${CI}, true)
	poetry install --extras docs
endif

.PHONY: generate-requirements
## Generate project requirements files from `pyproject.toml`
generate-requirements:
	poetry export -f requirements.txt --without-hashes > requirements.txt # subset
	poetry export --dev -f requirements.txt --without-hashes > requirements-dev.txt # superset w/o docs
	poetry export --extras docs --dev -f requirements.txt --without-hashes > requirements-all.txt # superset

.PHONY: clean-requirements
## Clean generated project requirements files
clean-requirements:
	find . -type f -name "requirements*.txt" -delete -maxdepth 1

.PHONY: clean
## Delete all compiled Python files
clean:
	find . -type f -name "*.py[co]" -delete
	find . -type d -name "__pycache__" -delete

#################################################################################
# COMMANDS                                                                      #
#################################################################################

.PHONY: provision-environment
## Set up Python virtual environment with installed project dependencies
provision-environment:
ifeq ($(shell command -v poetry),)
	@echo "poetry could not be found!"
	@echo "Please install poetry!"
	@echo "Ex.: 'curl -sSL \
	https://raw.githubusercontent.com/python-poetry/poetry/master/get-poetry.py  | python - \
	&& source $$HOME/.local/env'"
	@echo "see:"
	@echo "- https://python-poetry.org/docs/#installation"
	@echo "Note: 'pyenv' recommended for Python version management"
	@echo "see:"
	@echo "- https://github.com/pyenv/pyenv"
	@echo "- https://python-poetry.org/docs/managing-environments/"
	false
else
	poetry update --lock -v
	poetry install --extras docs -v
	# Install node ADR management library
	poetry run nodeenv --python-virtualenv --jobs=8
	poetry run npm install -g --no-package-lock --no-save log4brains
endif

.PHONY: install-pre-commit-hooks
## Install git pre-commit hooks locally
install-pre-commit-hooks:
	poetry run pre-commit install

.PHONY: get-project-version-number
## Echo project's canonical version number
get-project-version-number:
	@poetry version --short

.PHONY: bump-commit-and-push-project-version-number-%
##  Bumps the version of the project, writes the new version back to
##  pyproject.toml if a valid bump rule is provided, commits it to VCS, and pushes it to the remote repository.
##  The new version should ideally be a valid semver string or a valid bump rule:
##  "patch", "minor", "major", "prepatch", "preminor", "premajor", "prerelease".
bump-commit-and-push-project-version-number-%: VERSION_NUM_FILE:=pyproject.toml
bump-commit-and-push-project-version-number-%:
	# shell out to ensure next line gets updated version number;
	# directly running `poetry version $*` will cause next line to NOT pick up the version bump
	@echo "$(shell poetry version $*)"
	@export NEW_VER_NUM=$(shell $(MAKE) get-project-version-number) && \
		export COMMIT_MSG=":bookmark: Bump version number to \`$${NEW_VER_NUM}\`" && \
		git commit $(VERSION_NUM_FILE) -m "$${COMMIT_MSG}" && \
		git push \
	|| git checkout HEAD -- $(VERSION_NUM_FILE) # Rollback `VERSION_NUM_FILE` file on failure

#
.PHONY: deploy-jupyter-docker-container-local
## Deploy locally-built dockerized jupyter environment with preloaded dependencies
deploy-jupyter-docker-container-local: build-container deploy-container

.PHONY: deploy-jupyter-docker-container
## Deploy downloaded dockerized jupyter environment with preloaded dependencies
deploy-jupyter-docker-container: pull-container deploy-container

.PHONY: deploy-container
deploy-container: BIND_MOUNT_APPLICATION_DIR_ON_CONTAINER ?= false
deploy-container: IS_INTERACTIVE_SESSION ?= false
deploy-container: PORT?=8888
# If you want to validate that a set of pre-defined env vars are specified
# prior to container launch, list them in the REQ_ENV_VARS array
deploy-container: REQ_ENV_VARS := BIND_MOUNT_APPLICATION_DIR_ON_CONTAINER IS_INTERACTIVE_SESSION PORT
deploy-container: validate_req_env_vars stop-container
	@echo "Launching Jupyter Notebook on port $(PORT)"
	@if [ "$(IS_INTERACTIVE_SESSION)" != false ]; then \
		export INTERACTIVE_SESSION_ARGS="--interactive --tty --entrypoint bash"; \
	fi && \
	if [ "$(BIND_MOUNT_APPLICATION_DIR_ON_CONTAINER)" != false ]; then \
		export BIND_MOUNT_APPLICATION_DIR_ON_CONTAINER_ARGS="--mount type=bind,source=$$(pwd)/cookiecutter_cruft_poetry_tox_pre_commit_ci_cd_instance,target=/app/cookiecutter_cruft_poetry_tox_pre_commit_ci_cd_instance"; \
	fi && \
	docker run \
 	  --name $(PROJECT_NAME) --publish $(PORT):8888 \
 	  $${INTERACTIVE_SESSION_ARGS} \
 	  $${BIND_MOUNT_APPLICATION_DIR_ON_CONTAINER_ARGS} \
 	  -w /app/cookiecutter_cruft_poetry_tox_pre_commit_ci_cd_instance \
 	  $(LATEST_IMG)
	$(MAKE) stop-container

.PHONY: pull-container
pull-container:
## Pull cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance container
pull-container:
	- docker pull $(LATEST_IMG)

.PHONY: push-container
push-container:
## Push cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance container
push-container: build-container
	docker push $(IMG)
	docker push $(LATEST_IMG)

.PHONY: build-container
build-container: export DOCKER_BUILDKIT=1
## Build cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance container
build-container:
	docker build --tag $(IMG) .
	@echo Built $(IMG)
	@if ! [ "$(TAG)" = latest ]; then \
		docker tag $(IMG) $(LATEST_IMG) && \
		echo Built $(LATEST_IMG); \
	fi

.PHONY: stop-container
## Stop container forcefully (i.e., when keyboard interrupts are disabled)
stop-container:
	- docker stop $(PROJECT_NAME)
	- docker rm $(PROJECT_NAME)

ifeq (${CI}, true)
export TOX_PARALLEL_NO_SPINNER=1
endif

.PHONY: tox-%
## Run specified tox testenvs
tox-%: clean update-dependencies generate-requirements
	poetry run tox -e $* -- $(POSARGS)
	$(MAKE) clean-requirements

.PHONY: test
## Test via tox in poetry env
test: clean update-dependencies generate-requirements
	poetry run tox --parallel
	$(MAKE) clean-requirements

.PHONY: test-%-benchmark
test-%-benchmark:
	$(MAKE) tox-$*-benchmark

.PHONY: test-%
test-%:
	$(MAKE) tox-$*,coverage

.PHONY: test-mutations
## Test against mutated code to validate test suite robustness
test-mutations:
	$(MAKE) tox-mutmut

.PHONY: lint
## Run full static analysis suite for local development
lint:
	$(MAKE) scan-dependencies
	$(MAKE) pre-commit

.PHONY: scan-dependencies
## Scan dependencies for security vulnerabilities
scan-dependencies:
	$(MAKE) tox-security

.PHONY: pre-commit
## Lint using pre-commit hooks (see `.pre-commit-config.yaml`)
pre-commit:
	# Note: Running through `tox` since some hooks rely on finding their executables
	# in the `.tox/precommit/bin` directory and to provide an extra layer of isolation
	# for reproducibility.
	$(MAKE) tox-precommit POSARGS=$(PRECOMMIT_HOOK_ID)

.PHONY: pre-commit-%
## Lint using a single specific pre-commit hook (see `.pre-commit-config.yaml`)
pre-commit-%: export SKIP= # Reset `SKIP` env var to force single hooks to always run
pre-commit-%:
	$(MAKE) pre-commit PRECOMMIT_HOOK_ID=$*

.PHONY: docs-%
## Build documentation in the format specified after `-`
## e.g.,
## `make docs-html` builds the docs in HTML format,
## `make docs-confluence` builds and publishes the docs on confluence (see `docs/source/conf.py` for details),
## `make docs-clean` cleans the docs build directory
docs-%:
	$(MAKE) $* -C docs

.PHONY: docs-adl-preview
## Launch live preview of ADR documentation
docs-adl-preview:
	poetry run log4brains preview

.PHONY: test-docs
## Test documentation format/syntax
test-docs:
	poetry run tox -e docs

#################################################################################
# Self Documenting Commands                                                     #
#################################################################################

.DEFAULT_GOAL := help

# Inspired by <http://marmelab.com/blog/2016/02/29/auto-documented-makefile.html>
# sed script explained:
# /^##/:
# 	* save line in hold space
# 	* purge line
# 	* Loop:
# 		* append newline + line to hold space
# 		* go to next line
# 		* if line starts with doc comment, strip comment character off and loop
# 	* remove target prerequisites
# 	* append hold space (+ newline) to line
# 	* replace newline plus comments by `---`
# 	* print line
# Separate expressions are necessary because labels cannot be delimited by
# semicolon; see <http://stackoverflow.com/a/11799865/1968>
export DESCRIPTION
.PHONY: help
help:
ifdef DESCRIPTION
	@echo "$$(tput bold)Description:$$(tput sgr0)" && echo "$$DESCRIPTION" && echo
endif
	@echo "$$(tput bold)Available rules:$$(tput sgr0)"
	@echo
	@sed -n -e "/^## / { \
		h; \
		s/.*//; \
		:doc" \
		-e "H; \
		n; \
		s/^## //; \
		t doc" \
		-e "s/:.*//; \
		G; \
		s/\\n## /---/; \
		s/\\n/ /g; \
		p; \
	}" ${MAKEFILE_LIST} \
	| LC_ALL='C' sort --ignore-case \
	| awk -F '---' \
		-v ncol=$$(tput cols) \
		-v indent=19 \
		-v col_on="$$(tput setaf 6)" \
		-v col_off="$$(tput sgr0)" \
	'{ \
		printf "%s%*s%s ", col_on, -indent, $$1, col_off; \
		n = split($$2, words, " "); \
		line_length = ncol - indent; \
		for (i = 1; i <= n; i++) { \
			line_length -= length(words[i]) + 1; \
			if (line_length <= 0) { \
				line_length = ncol - indent - length(words[i]) - 1; \
				printf "\n%*s ", -indent, " "; \
			} \
			printf "%s ", words[i]; \
		} \
		printf "\n"; \
	}' \
	| more $(shell test $(shell uname) = Darwin && echo '--no-init --raw-control-chars')
