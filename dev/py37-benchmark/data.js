window.BENCHMARK_DATA = {
  "lastUpdate": 1612361799684,
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
        "date": 1612361798761,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1029.88556562902,
            "unit": "iter/sec",
            "range": "stddev: 0.00015585529032646135",
            "extra": "mean: 970.9816637630348 usec\nrounds: 574"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1344.004222473829,
            "unit": "iter/sec",
            "range": "stddev: 0.00023676998164583044",
            "extra": "mean: 744.0452814644877 usec\nrounds: 1311"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8625.622484745922,
            "unit": "iter/sec",
            "range": "stddev: 0.0002920373894871279",
            "extra": "mean: 115.93366180452033 usec\nrounds: 1851"
          }
        ]
      }
    ]
  }
}