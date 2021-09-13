window.BENCHMARK_DATA = {
  "lastUpdate": 1631547876224,
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
      }
    ]
  }
}