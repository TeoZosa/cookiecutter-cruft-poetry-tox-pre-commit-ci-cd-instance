window.BENCHMARK_DATA = {
  "lastUpdate": 1626356926727,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "87d22c25105b76081d8a9b6375ff6078e4135775",
          "message": "Merge pull request #246 from TeoZosa/dependabot/pip/sphinx-4.1.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@aaa8297",
          "timestamp": "2021-07-15T13:25:05Z",
          "tree_id": "159775871215a2ac15b3a5c98f84b1a27c5a910c"
        },
        "date": 1626356924168,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 928.550982234737,
            "unit": "iter/sec",
            "range": "stddev: 0.00010346010690375252",
            "extra": "mean: 1.0769467903564187 msec\nrounds: 477"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1282.634598106472,
            "unit": "iter/sec",
            "range": "stddev: 0.00014726100530223726",
            "extra": "mean: 779.6452719085235 usec\nrounds: 890"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8777.416081966256,
            "unit": "iter/sec",
            "range": "stddev: 0.0000233739146740488",
            "extra": "mean: 113.92874516391697 usec\nrounds: 1499"
          }
        ]
      }
    ]
  }
}