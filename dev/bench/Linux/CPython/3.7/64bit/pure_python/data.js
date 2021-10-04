window.BENCHMARK_DATA = {
  "lastUpdate": 1633354960444,
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
        "date": 1633123036816,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 312.7476046428678,
            "unit": "iter/sec",
            "range": "stddev: 0.00013840547013370115",
            "extra": "mean: 3.1974665358090215 msec\nrounds: 377"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 911.1596797757052,
            "unit": "iter/sec",
            "range": "stddev: 0.00006890328406304369",
            "extra": "mean: 1.0975024709677277 msec\nrounds: 1085"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1888.4949161059078,
            "unit": "iter/sec",
            "range": "stddev: 0.00002464553790007694",
            "extra": "mean: 529.5222091791533 usec\nrounds: 2266"
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
        "date": 1633354958327,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 262.8035195841011,
            "unit": "iter/sec",
            "range": "stddev: 0.0002903423023192083",
            "extra": "mean: 3.8051240774193094 msec\nrounds: 310"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 793.2877438625283,
            "unit": "iter/sec",
            "range": "stddev: 0.00015618526259443847",
            "extra": "mean: 1.2605766416243709 msec\nrounds: 985"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1570.7510503967294,
            "unit": "iter/sec",
            "range": "stddev: 0.00012241662674395524",
            "extra": "mean: 636.6381227295228 usec\nrounds: 2037"
          }
        ]
      }
    ]
  }
}