window.BENCHMARK_DATA = {
  "lastUpdate": 1633356499725,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "d7eeca1d9e67b4f46517bd1680a8ad8a1193af48",
          "message": "Merge pull request #362 from TeoZosa/streamline-and-expand-performance-testing-workflow\n\n👷‍♀️ Streamline and Expand Performance Testing\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@587e34c",
          "timestamp": "2021-10-01T21:00:00Z",
          "tree_id": "ea2e1a176cf76eab14a790bf919b66f4f819c49c"
        },
        "date": 1633123921012,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 306.80545961268217,
            "unit": "iter/sec",
            "range": "stddev: 0.00007268956118381636",
            "extra": "mean: 3.2593944099378853 msec\nrounds: 322"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 912.095900368985,
            "unit": "iter/sec",
            "range": "stddev: 0.00002891742825782208",
            "extra": "mean: 1.0963759398495856 msec\nrounds: 931"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1693.0197743645417,
            "unit": "iter/sec",
            "range": "stddev: 0.000025439471054493736",
            "extra": "mean: 590.6605552645362 usec\nrounds: 1909"
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
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "7d9bcdecca698f0b988fa7e33cf25bd2f133f879",
          "message": "Merge pull request #363 from TeoZosa/dependabot/pip/structlog-sentry-logger-0.11.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@8bb3f64",
          "timestamp": "2021-10-04T13:20:51Z",
          "tree_id": "c832f23ee0ee4150e089be6ed5cfdd673df85835"
        },
        "date": 1633355151011,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 276.1703639741299,
            "unit": "iter/sec",
            "range": "stddev: 0.00023931606385056077",
            "extra": "mean: 3.620953333333314 msec\nrounds: 300"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 829.6977812333747,
            "unit": "iter/sec",
            "range": "stddev: 0.00009840898595568912",
            "extra": "mean: 1.2052581344902058 msec\nrounds: 922"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1656.9004196656044,
            "unit": "iter/sec",
            "range": "stddev: 0.000034565447528053256",
            "extra": "mean: 603.5365723438105 usec\nrounds: 1873"
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
          "id": "8679cb9c951d4061aaf3032e932da1056fc0cea6",
          "message": "Merge pull request #257 from TeoZosa/dependabot/pip/structlog-sentry-logger-0.11.1",
          "timestamp": "2021-10-04T13:25:39Z",
          "tree_id": "c832f23ee0ee4150e089be6ed5cfdd673df85835"
        },
        "date": 1633356498164,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 297.30571071804786,
            "unit": "iter/sec",
            "range": "stddev: 0.00017449227166776123",
            "extra": "mean: 3.363541176470564 msec\nrounds: 340"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 892.1683218045001,
            "unit": "iter/sec",
            "range": "stddev: 0.00007913634340852512",
            "extra": "mean: 1.1208647242455319 msec\nrounds: 961"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1705.2407792835145,
            "unit": "iter/sec",
            "range": "stddev: 0.00006212944322754244",
            "extra": "mean: 586.4274489261081 usec\nrounds: 1909"
          }
        ]
      }
    ]
  }
}