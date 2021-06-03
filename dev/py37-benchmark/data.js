window.BENCHMARK_DATA = {
  "lastUpdate": 1622726713073,
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
        "date": 1622726710939,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1060.695514871945,
            "unit": "iter/sec",
            "range": "stddev: 0.00011931065133238707",
            "extra": "mean: 942.7776265469807 usec\nrounds: 565"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1406.8228868974365,
            "unit": "iter/sec",
            "range": "stddev: 0.00017100136179743676",
            "extra": "mean: 710.8215322010925 usec\nrounds: 1413"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 9276.030871817702,
            "unit": "iter/sec",
            "range": "stddev: 0.00003042899360650191",
            "extra": "mean: 107.80472961104356 usec\nrounds: 1827"
          }
        ]
      }
    ]
  }
}