window.BENCHMARK_DATA = {
  "lastUpdate": 1633355358875,
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
        "date": 1633123293583,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 367.816091954023,
            "unit": "iter/sec",
            "range": "stddev: 0.0000806871530459877",
            "extra": "mean: 2.7187500000000004 msec\nrounds: 10"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1037.6699029126212,
            "unit": "iter/sec",
            "range": "stddev: 0.00004519516200782638",
            "extra": "mean: 963.6976047904192 usec\nrounds: 10"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2057.877813504823,
            "unit": "iter/sec",
            "range": "stddev: 0.000004941058844013097",
            "extra": "mean: 485.9375 usec\nrounds: 10"
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
        "date": 1633355354556,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 283.1858407079646,
            "unit": "iter/sec",
            "range": "stddev: 0.00010925092168439078",
            "extra": "mean: 3.53125 msec\nrounds: 10"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 800.0000000000002,
            "unit": "iter/sec",
            "range": "stddev: 0.00008333333333333334",
            "extra": "mean: 1.25 msec\nrounds: 10"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1523.809523809524,
            "unit": "iter/sec",
            "range": "stddev: 0.000014731391274719715",
            "extra": "mean: 656.25 usec\nrounds: 10"
          }
        ]
      }
    ]
  }
}