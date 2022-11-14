#################################################################################
# GLOBALS                                                                       #
#################################################################################
REGISTRY_NAMESPACE = teozosa
DOCKER_REPOSITORY = $(REGISTRY_NAMESPACE)/$(PROJECT_NAME)

IMG := $(DOCKER_REPOSITORY):$(TAG)
LATEST_IMG := $(DOCKER_REPOSITORY):latest

.PHONY: get-docker-img-strong-version-tag
get-docker-img-strong-version-tag:
	@echo $(IMG)

.PHONY: get-docker-img-latest-tag
get-docker-img-latest-tag:
	@echo $(LATEST_IMG)

#################################################################################
# HELPER TARGETS                                                                #
#################################################################################
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

.PHONY: _validate-req-env-vars
_validate-req-env-vars:
	$(call check_defined, REQ_ENV_VARS, Error: Required list of env vars to validate as defined not set!)
	$(foreach REQ_ENV_VAR,$(REQ_ENV_VARS),$(call check_defined, $(REQ_ENV_VAR), Error: Required env var not set!))

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

#################################################################################
# COMMANDS                                                                      #
#################################################################################
#
.PHONY: deploy-project-docker-container-local
## Deploy locally-built dockerized project environment with preloaded dependencies
deploy-project-docker-container-local: build-container deploy-container

.PHONY: deploy-project-docker-container
## Deploy downloaded dockerized project environment with preloaded dependencies
deploy-project-docker-container: pull-container deploy-container

.PHONY: deploy-container
deploy-container: BIND_MOUNT_APPLICATION_DIR_ON_CONTAINER ?= false
deploy-container: IS_INTERACTIVE_SESSION ?= false

# If you want to validate that a set of pre-defined env vars are specified
# prior to container launch, list them in the REQ_ENV_VARS array
deploy-container: REQ_ENV_VARS := BIND_MOUNT_APPLICATION_DIR_ON_CONTAINER IS_INTERACTIVE_SESSION 
deploy-container: _validate-req-env-vars stop-container
	@echo "Launching $(PROJECT_NAME) container"
	@if [ "$(IS_INTERACTIVE_SESSION)" != false ]; then \
		export INTERACTIVE_SESSION_ARGS="--interactive --tty --entrypoint bash"; \
	fi && \
	if [ "$(BIND_MOUNT_APPLICATION_DIR_ON_CONTAINER)" != false ]; then \
		export BIND_MOUNT_APPLICATION_DIR_ON_CONTAINER_ARGS="--mount type=bind,source=$$(pwd)/$(SRC_DIR),target=/app/$(SRC_DIR)"; \
	fi && \
	docker run \
 	  --name $(PROJECT_NAME)  \
 	  $${INTERACTIVE_SESSION_ARGS} \
 	  $${BIND_MOUNT_APPLICATION_DIR_ON_CONTAINER_ARGS} \
 	  -w /app/$(SRC_DIR) \
 	  $(LATEST_IMG)
	$(MAKE) stop-container
