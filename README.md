cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance
==============================
![CI](https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/workflows/CI/badge.svg)
![codecov](https://codecov.io/gh/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/branch/master/graph/badge.svg?token=3HF21UWY82)
![License](https://img.shields.io/github/license/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance?style=plastic)
![PyPI - Python Version](https://img.shields.io/pypi/pyversions/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance?style=plastic)
![PyPI](https://img.shields.io/pypi/v/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance?color=informational&style=plastic)
[![pre-commit](https://img.shields.io/badge/pre--commit-enabled-brightgreen?logo=pre-commit&logoColor=white)](https://github.com/pre-commit/pre-commit)
[![Code style: black](https://img.shields.io/badge/code%20style-black-000000.svg)](https://github.com/psf/black)
[![powered by semgrep](https://img.shields.io/badge/powered%20by-semgrep-1B2F3D?labelColor=lightgrey&link=https://semgrep.dev/&logo=data%3Aimage%2Fpng%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAAA0AAAAOCAYAAAD0f5bSAAAABmJLR0QA/gD+AP+cH+QUAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAB3RJTUUH5AYMEy0l8dkqrQAAAvFJREFUKBUB5gIZ/QEAAP8BAAAAAAMG6AD9+hn/GzA//wD//wAAAAD+AAAAAgABAQDl0MEBAwbmAf36GQAAAAAAAQEC9QH//gv/Gi1GFQEC+OoAAAAAAAAAAAABAQAA//8AAAAAAAAAAAD//ggX5tO66gID9AEBFSRxAgYLzRQAAADpAAAAAP7+/gDl0cMPAAAA+wAAAPkbLz39AgICAAAAAAAAAAAs+vU12AEbLz4bAAAA5P8AAAAA//4A5NDDEwEBAO///wABAQEAAP//ABwcMD7hAQEBAAAAAAAAAAAaAgAAAOAAAAAAAQEBAOXRwxUAAADw//8AAgAAAAD//wAAAAAA5OXRwhcAAQEAAAAAAAAAAOICAAAABP3+/gDjzsAT//8A7gAAAAEAAAD+AAAA/wAAAAAAAAAA//8A7ePOwA/+/v4AAAAABAIAAAAAAAAAAAAAAO8AAAABAAAAAAAAAAIAAAABAAAAAAAAAAgAAAD/AAAA8wAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAA8AAAAEAAAA/gAAAP8AAAADAAAA/gAAAP8AAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAA7wAAAPsAAAARAAAABAAAAP4AAAAAAAAAAgAAABYAAAAAAAAAAAIAAAD8AwICAB0yQP78/v4GAAAA/wAAAPAAAAD9AAAA/wAAAPr9//8aHTJA6AICAgAAAAD8AgAAADIAAAAAAP//AB4wPvgAAAARAQEA/gEBAP4BAQABAAAAGB0vPeIA//8AAAAAAAAAABAC+vUz1QAAAA8AAAAAAwMDABwwPu3//wAe//8AAv//ABAcMD7lAwMDAAAAAAAAAAAG+vU0+QEBAvUB//4L/xotRhUBAvjqAAAAAAAAAAAAAQEAAP//AAAAAAAAAAAA//4IF+bTuuoCA/QBAQAA/wEAAAAAAwboAP36Gf8bMD//AP//AAAAAP4AAAACAAEBAOXQwQEDBuYB/foZAAAAAAD4I6qbK3+1zQAAAABJRU5ErkJggg==)](https://semgrep.dev/)


---

**Documentation**: [https://cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance.readthedocs.io](https://cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance.readthedocs.io)

**Source Code**: [https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance](https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance)

---

Overview
--------
- TODO

Features
--------
- TODO

Requirements
------------
- TODO

------------

Table of Contents

<!-- toc -->

- [Installation](#installation)
- [Usage](#usage)
  * [Running The Notebook](#running-the-notebook)
    + [1. Docker Container Jupyter Environment (recommended)](#1-docker-container-jupyter-environment-recommended)
    + [2. Locally via Poetry (development workflow)](#2-locally-via-poetry-development-workflow)
- [Development](#development)
  * [Package and Dependencies Installation](#package-and-dependencies-installation)
  * [Docker Container Image Building/Deployment Orchestration](#docker-container-image-buildingdeployment-orchestration)
  * [Testing](#testing)
  * [Code Quality](#code-quality)
    + [Automate via Git Pre-Commit Hooks](#automate-via-git-pre-commit-hooks)
  * [Documentation](#documentation)
- [Summary](#summary)
- [Further Reading](#further-reading)
- [Legal](#legal)
  * [License](#license)
  * [Credits](#credits)

<!-- tocstop -->

Installation
============
You can install Cookiecutter Cruft Poetry Tox Pre Commit Ci Cd Instance via [pip](https://pip.pypa.io/):
 ```shell script
pip install cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance
```

Usage
=====
- TODO
    - High-level usage overview
------------
- TODO
    - Step 0 description
```python
import cookiecutter_cruft_poetry_tox_pre_commit_ci_cd_instance

# TODO
```

> 📝 **Note**  
>  All following commands are relative to the project root directory and assume
> `make` is installed.



Running The Notebook
--------------------
To facilitate your interacting with notebooks with the minimal amount of
friction, here are two suggested options, in order of simplicity:
### 1. Docker Container Jupyter Environment (recommended)

Run:
```shell script
# Uncomment below to run with corresponding options.
#export PORT=8888 # default value; change this value if you need to run the container on a different port
# Note: *any* value other than `false` will trigger an option
#export IS_INTERACTIVE_SESSION=true
#export BIND_MOUNT_APPLICATION_DIR_ON_CONTAINER=true
make deploy-jupyter-docker-container
```

which will fetch and run the project container image
that launches a Jupyter notebook environment preloaded with all the production
dependencies on `127.0.0.1:8888`.

You can then navigate to the Jupyter notebook URL displayed on your console.

> 🔥 **Tip**  
>  If you prefer to build and run the container locally, run:
>  ```shell script
>  make deploy-jupyter-docker-container-local
>  ```

### 2. Locally via Poetry (development workflow)

Run:
 ```shell script
make provision-environment # Note: installs ALL dependencies!
poetry shell # Activate the project's virtual environment
jupyter notebook # Launch the Jupyter server
```

Development
===========

> 📝 **Note**  
>  For convenience, many of the below processes are abstracted away
>  and encapsulated in single [Make](https://www.gnu.org/software/make/) targets.


> 🔥 **Tip**  
>  Invoking `make` without any arguments will display
>  auto-generated documentation on available commands.

Package and Dependencies Installation
--------------------------------------

Make sure you have Python 3.6+ and [`poetry`](https://python-poetry.org/)
installed and configured.

To install the package and all dev dependencies, run:
```shell script
make provision-environment
```

> 🔥 **Tip**  
>  Invoking the above without `poetry` installed will emit a
>  helpful error message letting you know how you can install poetry.

Docker Container Image Building/Deployment Orchestration
--------------------------------------------------------

The following set of `make` targets orchestrate the project's container image
build and deploy steps:

```shell
build-container     Build cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance container
deploy-jupyter-docker-container Deploy downloaded dockerized jupyter environment with preloaded dependencies
deploy-jupyter-docker-container-local Deploy locally-built dockerized jupyter environment with preloaded dependencies
pull-container      Pull cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance container
push-container      Push cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance container
stop-container      Stop container forcefully (i.e., when keyboard interrupts are disabled)
```

Note that the project's container image is insulated from the implementation
details of the application's top-level setup and execution logic which falls
under the purview of the project's entrypoint script. As such, Dockerfile
modifications will generally only be necessary when updating non-Python
environment dependencies (Python dependency updates are automatically reflected
in new image builds via the `pyproject.toml` and `poetry.lock` files).

Testing
------------

We use [`tox`](https://tox.readthedocs.io/en/latest/) for our test automation framework
and [`pytest`](https://pytest.readthedocs.io/) for our testing framework.

To invoke the tests, run:

```shell script
make test
```

Run [mutation tests](https://opensource.com/article/20/7/mutmut-python) to validate test suite robustness (Optional):

```shell script
make test-mutations
```

> 📝 **Note**  
>  Test time scales with the complexity of the codebase. Results are cached
>  in `.mutmut-cache`, so once you get past the initial [cold start problem](https://en.wikipedia.org/wiki/Cold_start_(recommender_systems)),
>  subsequent mutation test runs will be much faster; new mutations will only
>  be applied to modified code paths.

Code Quality
------------

We are using [`pre-commit`](https://pre-commit.com/) for our code quality
static analysis automation and management framework.

To invoke the analyses and auto-formatting over all version-controlled files, run:

```shell script
make lint
```

> 🚨 **Danger**  
>  CI will fail if either testing or code quality fail,
>  so it is recommended to automatically run the above locally
>  prior to every commit that is pushed.

### Automate via Git Pre-Commit Hooks

To automatically run code quality validation on every commit (over to-be-committed
files), run:

```shell script
make install-pre-commit-hooks
```

> ⚠️ Warning  
>  This will prevent commits if any single pre-commit hook fails
>  (unless it is allowed to fail)
>  or a file is modified by an auto-formatting job;
>  in the latter case, you may simply repeat the commit and it should pass.

Documentation
--------------

```shell script
make docs-clean docs-html
```

> 📝 **Note**  
>  For faster feedback loops, this will attempt to automatically open the newly
>  built documentation static HTML in your browser.

Summary
=======
- TODO

Further Reading
===============
- TODO

---

Legal
=====

License
-------

cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance is licensed under the Apache License, Version 2.0.
See [LICENSE](./LICENSE) for the full license text.


Credits
-------

This project was generated from
[`@TeoZosa`'s](https://github.com/TeoZosa)
[`cookiecutter-cruft-poetry-tox-pre-commit-ci-cd`](https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd)
template.
