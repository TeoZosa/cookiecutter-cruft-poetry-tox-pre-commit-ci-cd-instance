window.BENCHMARK_DATA = {
  "lastUpdate": 1622048526669,
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
          "id": "b6b44a3764fdb1e50642a5f7e8180818515692de",
          "message": "Merge pull request #186 from TeoZosa/dependabot/pip/hypothesis-6.13.6\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@e8dfa22",
          "timestamp": "2021-05-26T16:55:13Z",
          "tree_id": "36065c967f1bce02077796250d2690e4be212cd9",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/b6b44a3764fdb1e50642a5f7e8180818515692de"
        },
        "date": 1622048524616,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1045.0940428176164,
            "unit": "iter/sec",
            "range": "stddev: 0.00021336407936608414",
            "extra": "mean: 956.851688967587 usec\nrounds: 553"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1476.0448108968533,
            "unit": "iter/sec",
            "range": "stddev: 0.00017632026184625336",
            "extra": "mean: 677.4862067990972 usec\nrounds: 1412"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 10318.217907984808,
            "unit": "iter/sec",
            "range": "stddev: 0.000029981922305015",
            "extra": "mean: 96.91596057746993 usec\nrounds: 1801"
          }
        ]
      }
    ]
  }
}