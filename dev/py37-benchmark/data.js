window.BENCHMARK_DATA = {
  "lastUpdate": 1622554790518,
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
        "date": 1622554788342,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 839.1183209462155,
            "unit": "iter/sec",
            "range": "stddev: 0.0007134013330598149",
            "extra": "mean: 1.1917270485434872 msec\nrounds: 515"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1201.5432604648217,
            "unit": "iter/sec",
            "range": "stddev: 0.00031021321744522127",
            "extra": "mean: 832.2630011782898 usec\nrounds: 849"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 7577.7257379793145,
            "unit": "iter/sec",
            "range": "stddev: 0.00019618484758403702",
            "extra": "mean: 131.9657156484343 usec\nrounds: 1572"
          }
        ]
      }
    ]
  }
}