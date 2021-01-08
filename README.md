cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance
==============================

![CI](https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/workflows/CI/badge.svg)
[![codecov](https://codecov.io/gh/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/branch/master/graph/badge.svg?token=3HF21UWY82)](undefined)
![License](https://img.shields.io/github/license/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance?style=plastic)
![PyPI - Python Version](https://img.shields.io/pypi/pyversions/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance?style=plastic)
![PyPI](https://img.shields.io/pypi/v/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance?color=informational&style=plastic)

[![pre-commit](https://img.shields.io/badge/pre--commit-enabled-brightgreen?logo=pre-commit&logoColor=white)](https://github.com/pre-commit/pre-commit)
[![Code style: black](https://img.shields.io/badge/code%20style-black-000000.svg)](https://github.com/psf/black)
[![powered by semgrep](https://img.shields.io/badge/powered%20by-semgrep-1B2F3D?labelColor=lightgrey&link=https://semgrep.dev/&logo=data%3Aimage%2Fpng%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAAA0AAAAOCAYAAAD0f5bSAAAABmJLR0QA/gD+AP+cH+QUAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAB3RJTUUH5AYMEy0l8dkqrQAAAvFJREFUKBUB5gIZ/QEAAP8BAAAAAAMG6AD9+hn/GzA//wD//wAAAAD+AAAAAgABAQDl0MEBAwbmAf36GQAAAAAAAQEC9QH//gv/Gi1GFQEC+OoAAAAAAAAAAAABAQAA//8AAAAAAAAAAAD//ggX5tO66gID9AEBFSRxAgYLzRQAAADpAAAAAP7+/gDl0cMPAAAA+wAAAPkbLz39AgICAAAAAAAAAAAs+vU12AEbLz4bAAAA5P8AAAAA//4A5NDDEwEBAO///wABAQEAAP//ABwcMD7hAQEBAAAAAAAAAAAaAgAAAOAAAAAAAQEBAOXRwxUAAADw//8AAgAAAAD//wAAAAAA5OXRwhcAAQEAAAAAAAAAAOICAAAABP3+/gDjzsAT//8A7gAAAAEAAAD+AAAA/wAAAAAAAAAA//8A7ePOwA/+/v4AAAAABAIAAAAAAAAAAAAAAO8AAAABAAAAAAAAAAIAAAABAAAAAAAAAAgAAAD/AAAA8wAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAA8AAAAEAAAA/gAAAP8AAAADAAAA/gAAAP8AAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAA7wAAAPsAAAARAAAABAAAAP4AAAAAAAAAAgAAABYAAAAAAAAAAAIAAAD8AwICAB0yQP78/v4GAAAA/wAAAPAAAAD9AAAA/wAAAPr9//8aHTJA6AICAgAAAAD8AgAAADIAAAAAAP//AB4wPvgAAAARAQEA/gEBAP4BAQABAAAAGB0vPeIA//8AAAAAAAAAABAC+vUz1QAAAA8AAAAAAwMDABwwPu3//wAe//8AAv//ABAcMD7lAwMDAAAAAAAAAAAG+vU0+QEBAvUB//4L/xotRhUBAvjqAAAAAAAAAAAAAQEAAP//AAAAAAAAAAAA//4IF+bTuuoCA/QBAQAA/wEAAAAAAwboAP36Gf8bMD//AP//AAAAAP4AAAACAAEBAOXQwQEDBuYB/foZAAAAAAD4I6qbK3+1zQAAAABJRU5ErkJggg==)](https://semgrep.dev/)
[![Dependabot](https://api.dependabot.com/badges/status?host=github&repo=TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance)](https://dependabot.com/)


Overview
------------------------------
- TODO

Features
------------
- TODO

Requirements
------------
- TODO

------------

Table of Contents
<!-- toc -->

Installation
==============================
You can install Cookiecutter Cruft Poetry Tox Pre Commit Ci Cd Instance via [pip](https://pip.pypa.io/):
 ```shell script
pip install cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance
```

Usage
==============================
- TODO
    - High-level usage overview
------------
- TODO
    - Step 0 description
```python
import cookiecutter_cruft_poetry_tox_pre_commit_ci_cd_instance

# TODO
```

Development
==============================

For convenience, many of the below processes are abstracted away and encapsulated in
single [`make`](https://www.gnu.org/software/make/) targets.

Tip: invoking `make` without any arguments will display auto-generated
documentation on available commands.

Package and Dependencies Installation
------------

**Note**: `poetry` is a required dependency.

To install the package and all dev dependencies, run:
```shell script
make provision_environment
```

Testing
------------

We use [`tox`](https://tox.readthedocs.io/en/latest/) for our automation framework
  and [`pytest`](https://docs.pytest.org/en/stable/) for our testing framework.
  To invoke the tests, run:

```shell script
make test
```

Code Quality
------------

We are using [`pre-commit`](https://pre-commit.com/) for our code quality
static analysis automation and management framework. To invoke the analyses and
auto-formatting over all version-controlled files, run:

```shell script
make lint
```

**Note**: CI will fail if either testing or code quality fail, so it is recommended to automatically
  run the above locally prior to every commit that is pushed.

### Automate via Git Pre-Commit Hooks

To automatically run code quality validation on every commit (over to-be-committed
files), run:

```shell script
make install-pre-commit-hooks
```

**Note**: This will prevent commits if any single pre-commit hook fails (unless it
is allowed to fail) or a file is modified by an auto-formatting job; in the
latter case, you may simply repeat the commit and it should pass.

Summary
==============================
- TODO

Further Reading
==============================
- TODO

---

Legal
==============================

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
