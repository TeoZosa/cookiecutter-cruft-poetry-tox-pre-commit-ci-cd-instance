window.BENCHMARK_DATA = {
  "lastUpdate": 1622048546592,
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
        "date": 1622048544467,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 987.5715583169149,
            "unit": "iter/sec",
            "range": "stddev: 0.00013740155716322319",
            "extra": "mean: 1.012584851779517 msec\nrounds: 533"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1340.7970435218485,
            "unit": "iter/sec",
            "range": "stddev: 0.00014032369930158442",
            "extra": "mean: 745.8250335735506 usec\nrounds: 1102"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8313.12600537101,
            "unit": "iter/sec",
            "range": "stddev: 0.00003664319026401183",
            "extra": "mean: 120.29169284260962 usec\nrounds: 1719"
          }
        ]
      }
    ]
  }
}