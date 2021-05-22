window.BENCHMARK_DATA = {
  "lastUpdate": 1621652178126,
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
          "id": "5f71d3ec5162356f79bf5dff1522c86e44265db5",
          "message": ":boom: Enforce type annotations across codebase\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@d36318a",
          "timestamp": "2021-05-22T02:50:35Z",
          "tree_id": "5954f229c68d49ece82eac8d3482b3cc9c1444a4",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/5f71d3ec5162356f79bf5dff1522c86e44265db5"
        },
        "date": 1621652177286,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1273.071745233832,
            "unit": "iter/sec",
            "range": "stddev: 0.000017131387932361953",
            "extra": "mean: 785.5016842089482 usec\nrounds: 608"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1869.6231512433747,
            "unit": "iter/sec",
            "range": "stddev: 0.000015663346998585992",
            "extra": "mean: 534.8671465342948 usec\nrounds: 1515"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13668.035277484983,
            "unit": "iter/sec",
            "range": "stddev: 0.000004245530036065899",
            "extra": "mean: 73.1634049589611 usec\nrounds: 1815"
          }
        ]
      }
    ]
  }
}