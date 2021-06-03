window.BENCHMARK_DATA = {
  "lastUpdate": 1622726679207,
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
          "id": "3c90595ddde6f66bd491b962de4cf5b6fa829118",
          "message": "Merge pull request #199 from TeoZosa/dependabot/pip/hypothesis-6.13.12\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@83f41c0",
          "timestamp": "2021-06-03T13:18:40Z",
          "tree_id": "20f5ff199debad842d7275599e0cc529653f25c2",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/3c90595ddde6f66bd491b962de4cf5b6fa829118"
        },
        "date": 1622726677263,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1244.7358232694087,
            "unit": "iter/sec",
            "range": "stddev: 0.00001857226496039979",
            "extra": "mean: 803.3833214291298 usec\nrounds: 644"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1856.4852344606782,
            "unit": "iter/sec",
            "range": "stddev: 0.00001561348176740735",
            "extra": "mean: 538.6522776684011 usec\nrounds: 1545"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13618.63465006415,
            "unit": "iter/sec",
            "range": "stddev: 0.000005486330070598985",
            "extra": "mean: 73.42880000054113 usec\nrounds: 1875"
          }
        ]
      }
    ]
  }
}