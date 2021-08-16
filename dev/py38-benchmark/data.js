window.BENCHMARK_DATA = {
  "lastUpdate": 1629127183615,
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
          "id": "f51d9096172e63e48ea3fc148ccf8a1519cd316a",
          "message": "Merge pull request #285 from TeoZosa/dependabot/pip/importlib-metadata-4.6.4\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@04d23f8",
          "timestamp": "2021-08-16T14:41:15Z",
          "tree_id": "a24f62095abb4c26fca4a913c9c6cb3b079b68ed"
        },
        "date": 1629127181795,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 256.98045777768135,
            "unit": "iter/sec",
            "range": "stddev: 0.0010981113689557188",
            "extra": "mean: 3.8913464807706077 msec\nrounds: 104"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 777.2824921364023,
            "unit": "iter/sec",
            "range": "stddev: 0.0002737627414363103",
            "extra": "mean: 1.2865335449039212 msec\nrounds: 657"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1554.8654384766335,
            "unit": "iter/sec",
            "range": "stddev: 0.00019764081491322453",
            "extra": "mean: 643.1424708878614 usec\nrounds: 584"
          }
        ]
      }
    ]
  }
}