window.BENCHMARK_DATA = {
  "lastUpdate": 1612361761591,
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
          "id": "b598db630d2623785e689a40783b94845e6a6bb6",
          "message": "Merge pull request #62 from TeoZosa/dependabot/pip/tox-3.21.4\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@16ce6d0",
          "timestamp": "2021-02-03T14:12:04Z",
          "tree_id": "3d46a0a78b0a929c3590e35915f06454f901c5d9",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/b598db630d2623785e689a40783b94845e6a6bb6"
        },
        "date": 1612361760592,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1243.83036372097,
            "unit": "iter/sec",
            "range": "stddev: 0.00019168332235180462",
            "extra": "mean: 803.968152866488 usec\nrounds: 628"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1922.7253736171651,
            "unit": "iter/sec",
            "range": "stddev: 0.00001709302384417032",
            "extra": "mean: 520.0950763544199 usec\nrounds: 1624"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 14471.426659024613,
            "unit": "iter/sec",
            "range": "stddev: 0.000005312491651415954",
            "extra": "mean: 69.10168731542332 usec\nrounds: 1695"
          }
        ]
      }
    ]
  }
}