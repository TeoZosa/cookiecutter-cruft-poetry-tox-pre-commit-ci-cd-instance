window.BENCHMARK_DATA = {
  "lastUpdate": 1622554799904,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action",
            "username": "actions-user"
          },
          "distinct": true,
          "id": "ed593493024bf8f36cac7b7196156833d38e61af",
          "message": "Merge pull request #196 from TeoZosa/dependabot/pip/importlib-metadata-4.4.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@f619d4a",
          "timestamp": "2021-06-01T13:32:20Z",
          "tree_id": "6e04ecb76c6cca080f4ff825fe785e0d9dccb20c",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/ed593493024bf8f36cac7b7196156833d38e61af"
        },
        "date": 1622554797757,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 987.0391261917924,
            "unit": "iter/sec",
            "range": "stddev: 0.00011171986260965537",
            "extra": "mean: 1.013131063869994 msec\nrounds: 501"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1366.7441262396349,
            "unit": "iter/sec",
            "range": "stddev: 0.00023601935373112327",
            "extra": "mean: 731.6658479091699 usec\nrounds: 1315"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8369.576302060854,
            "unit": "iter/sec",
            "range": "stddev: 0.00009663498668862068",
            "extra": "mean: 119.480361240481 usec\nrounds: 1517"
          }
        ]
      }
    ]
  }
}