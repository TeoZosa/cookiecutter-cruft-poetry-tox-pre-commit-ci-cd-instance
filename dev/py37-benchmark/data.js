window.BENCHMARK_DATA = {
  "lastUpdate": 1631547922903,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "08f1b20aefbe1be7078c0ef636b707c659de2e67",
          "message": "Merge pull request #328 from TeoZosa/dependabot/pip/sphinx-4.2.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@dba7f1e",
          "timestamp": "2021-09-13T14:47:07Z",
          "tree_id": "ef37e23c1dc1c4498f5cb03e0d81d8eb4e700bbd"
        },
        "date": 1631547873326,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 259.9561810292856,
            "unit": "iter/sec",
            "range": "stddev: 0.0002557927029946457",
            "extra": "mean: 3.8468021650439006 msec\nrounds: 103"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 756.7400222197069,
            "unit": "iter/sec",
            "range": "stddev: 0.00018093828948716388",
            "extra": "mean: 1.3214577934793919 msec\nrounds: 644"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1534.358705741914,
            "unit": "iter/sec",
            "range": "stddev: 0.000054093490250448756",
            "extra": "mean: 651.73808201288 usec\nrounds: 695"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "1d5bba6ed748df0399217eccc0b8d558ffbf94c3",
          "message": "Merge pull request #217 from TeoZosa/dependabot/pip/structlog-sentry-logger-0.9.1",
          "timestamp": "2021-09-13T13:51:15Z",
          "tree_id": "a342a41308dd9589bbb6946313cf0ebb502a785b"
        },
        "date": 1631547919752,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 298.5840083076095,
            "unit": "iter/sec",
            "range": "stddev: 0.00032314585431608277",
            "extra": "mean: 3.3491411869914094 msec\nrounds: 123"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 848.9234200610902,
            "unit": "iter/sec",
            "range": "stddev: 0.00024459261424969724",
            "extra": "mean: 1.1779625539463126 msec\nrounds: 760"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1718.0917852054677,
            "unit": "iter/sec",
            "range": "stddev: 0.00016166648796457438",
            "extra": "mean: 582.041081047605 usec\nrounds: 839"
          }
        ]
      }
    ]
  }
}