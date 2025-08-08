# syntax=docker/dockerfile:experimental

FROM python:3.13.6-slim@sha256:6f79e7a10bb7d0b0a50534a70ebc78823f941fba26143ecd7e6c5dca9d7d7e8a

LABEL maintainer="YOUR_FIRST_AND_LAST_NAME <action@github.com>"
ENV LANG C.UTF-8

SHELL ["/bin/bash",  "-o", "pipefail", "-c"]

# Install common functionality for downstream layers/user env
# hadolint ignore=DL3008
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
        curl \
        git \
        make && \
    apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# Setup Poetry for Python package and dependency management
ENV POETRY_HOME=/opt/poetry \
    POETRY_VIRTUALENVS_CREATE=false
ENV PATH="${POETRY_HOME}/bin:${PATH}"
# Install `poetry` via `curl` and system `python`
RUN curl -sSL https://raw.githubusercontent.com/python-poetry/poetry/master/install-poetry.py | python && \
    poetry --version && \
    poetry config --list
#

# Install project dependencies
COPY pyproject.toml poetry.lock /app/
WORKDIR /app/
RUN poetry install \
        --no-dev \
        --no-interaction \
        --no-root

# Note: delete the below if you do NOT want application files distributed with
# your container image
COPY cookiecutter_cruft_poetry_tox_pre_commit_ci_cd_instance /app/cookiecutter_cruft_poetry_tox_pre_commit_ci_cd_instance

#
CMD ["/app/cookiecutter_cruft_poetry_tox_pre_commit_ci_cd_instance/entrypoint"]
#
