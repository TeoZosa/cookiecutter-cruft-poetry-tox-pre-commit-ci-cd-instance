window.BENCHMARK_DATA = {
  "lastUpdate": 1633355409115,
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
        "date": 1633124029646,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 281.4708033229328,
            "unit": "iter/sec",
            "range": "stddev: 0.00027090778802846315",
            "extra": "mean: 3.5527663551401996 msec\nrounds: 321"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 873.5179251043568,
            "unit": "iter/sec",
            "range": "stddev: 0.00005367409746029399",
            "extra": "mean: 1.1447961985216648 msec\nrounds: 947"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1636.463531473699,
            "unit": "iter/sec",
            "range": "stddev: 0.00003668172141696048",
            "extra": "mean: 611.0738068812699 usec\nrounds: 1802"
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
        "date": 1633355405782,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 261.5273017715807,
            "unit": "iter/sec",
            "range": "stddev: 0.000388320796195817",
            "extra": "mean: 3.8236925675675923 msec\nrounds: 296"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 870.3824631913806,
            "unit": "iter/sec",
            "range": "stddev: 0.00008836075653008353",
            "extra": "mean: 1.1489202072538989 msec\nrounds: 965"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1641.6608928222638,
            "unit": "iter/sec",
            "range": "stddev: 0.00004800404579307809",
            "extra": "mean: 609.1391982182438 usec\nrounds: 1796"
          }
        ]
      }
    ]
  }
}