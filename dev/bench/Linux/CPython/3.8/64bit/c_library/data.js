window.BENCHMARK_DATA = {
  "lastUpdate": 1633355032667,
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
        "date": 1633123073587,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 266.6948146202535,
            "unit": "iter/sec",
            "range": "stddev: 0.0006958552920912333",
            "extra": "mean: 3.749604211180105 msec\nrounds: 322"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 763.7276698414095,
            "unit": "iter/sec",
            "range": "stddev: 0.00032157355393556947",
            "extra": "mean: 1.3093672515592545 msec\nrounds: 962"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1579.9478536370254,
            "unit": "iter/sec",
            "range": "stddev: 0.00015061053551196458",
            "extra": "mean: 632.9322817193043 usec\nrounds: 1931"
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
        "date": 1633355030185,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 276.8595270131852,
            "unit": "iter/sec",
            "range": "stddev: 0.0006041351819832398",
            "extra": "mean: 3.6119399999999855 msec\nrounds: 351"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 824.0638673417246,
            "unit": "iter/sec",
            "range": "stddev: 0.00037413858774735257",
            "extra": "mean: 1.213498176088963 msec\nrounds: 1079"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1653.1539192370203,
            "unit": "iter/sec",
            "range": "stddev: 0.00014307259851123425",
            "extra": "mean: 604.9043518352663 usec\nrounds: 2234"
          }
        ]
      }
    ]
  }
}