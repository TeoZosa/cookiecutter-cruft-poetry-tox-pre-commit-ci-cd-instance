window.BENCHMARK_DATA = {
  "lastUpdate": 1621452175756,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action",
            "username": "actions-user"
          },
          "distinct": true,
          "id": "5283162bd4bcc9730fc2fb6d53494fb16bdc65c7",
          "message": ":memo: Add docstrings to `conftest.py`\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@f5a07b8",
          "timestamp": "2021-05-19T19:17:48Z",
          "tree_id": "9bb456976ce38356f614e5c7790f8d8c2b96955a",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/5283162bd4bcc9730fc2fb6d53494fb16bdc65c7"
        },
        "date": 1621452174456,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1097.7923994891364,
            "unit": "iter/sec",
            "range": "stddev: 0.000027397486898220187",
            "extra": "mean: 910.9190412188638 usec\nrounds: 558"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1602.8443599069758,
            "unit": "iter/sec",
            "range": "stddev: 0.000024229433763531537",
            "extra": "mean: 623.8908935974526 usec\nrounds: 1344"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 11953.4229208968,
            "unit": "iter/sec",
            "range": "stddev: 0.000007453038598893357",
            "extra": "mean: 83.65804561736158 usec\nrounds: 1710"
          }
        ]
      }
    ]
  }
}