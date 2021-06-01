window.BENCHMARK_DATA = {
  "lastUpdate": 1622554676001,
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
        "date": 1622554674913,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1258.2028961230465,
            "unit": "iter/sec",
            "range": "stddev: 0.000015568189634107124",
            "extra": "mean: 794.784373077937 usec\nrounds: 587"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1853.539832997055,
            "unit": "iter/sec",
            "range": "stddev: 0.000014186663583921979",
            "extra": "mean: 539.5082329485545 usec\nrounds: 1554"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 17247.02461850028,
            "unit": "iter/sec",
            "range": "stddev: 0.000005148670694559714",
            "extra": "mean: 57.981015399452446 usec\nrounds: 2013"
          }
        ]
      }
    ]
  }
}