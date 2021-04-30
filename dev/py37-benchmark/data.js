window.BENCHMARK_DATA = {
  "lastUpdate": 1619808516365,
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
          "id": "4cdc7b8d70275c5d6765430631fbd8e8748805cb",
          "message": "Merge pull request #154 from TeoZosa/dependabot/pip/pylint-2.8.2\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@81ccf9d",
          "timestamp": "2021-04-30T18:43:59Z",
          "tree_id": "0e9bcca84c9ee66c7e801aec00022d8a13fa225e",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/4cdc7b8d70275c5d6765430631fbd8e8748805cb"
        },
        "date": 1619808515405,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 935.3137842097478,
            "unit": "iter/sec",
            "range": "stddev: 0.00015365765125697472",
            "extra": "mean: 1.0691599085593568 msec\nrounds: 514"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1287.998250086377,
            "unit": "iter/sec",
            "range": "stddev: 0.00011673340672324544",
            "extra": "mean: 776.3985703652447 usec\nrounds: 1343"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8102.371385563058,
            "unit": "iter/sec",
            "range": "stddev: 0.00003547877302384611",
            "extra": "mean: 123.42065704144554 usec\nrounds: 1697"
          }
        ]
      }
    ]
  }
}