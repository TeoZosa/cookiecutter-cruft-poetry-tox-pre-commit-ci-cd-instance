window.BENCHMARK_DATA = {
  "lastUpdate": 1633356073509,
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
        "date": 1633124379348,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 280.32906458999474,
            "unit": "iter/sec",
            "range": "stddev: 0.0002253422343415906",
            "extra": "mean: 3.5672362459546805 msec\nrounds: 309"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 836.9728295469196,
            "unit": "iter/sec",
            "range": "stddev: 0.00019645295049935962",
            "extra": "mean: 1.19478191489362 msec\nrounds: 940"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1597.8264667854905,
            "unit": "iter/sec",
            "range": "stddev: 0.00007924867707805473",
            "extra": "mean: 625.8501913613944 usec\nrounds: 1829"
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
        "date": 1633356067606,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 279.53624255564523,
            "unit": "iter/sec",
            "range": "stddev: 0.0003775007421488959",
            "extra": "mean: 3.577353658536557 msec\nrounds: 328"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 839.4502749420503,
            "unit": "iter/sec",
            "range": "stddev: 0.00018835461041795604",
            "extra": "mean: 1.191255789473692 msec\nrounds: 950"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1547.9759080492258,
            "unit": "iter/sec",
            "range": "stddev: 0.00009700408766322131",
            "extra": "mean: 646.0048859934839 usec\nrounds: 1842"
          }
        ]
      }
    ]
  }
}