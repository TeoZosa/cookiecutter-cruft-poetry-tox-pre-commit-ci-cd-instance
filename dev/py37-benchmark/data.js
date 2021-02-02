window.BENCHMARK_DATA = {
  "lastUpdate": 1612275366311,
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
          "id": "e06321b7db5e0a5cf91a4a557c5492a83615983a",
          "message": "Merge pull request #58 from TeoZosa/dependabot/pip/dot-github/workflows/cruft-2.6.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@7f20b60",
          "timestamp": "2021-02-02T14:11:22Z",
          "tree_id": "d057d8e98bd3c7fa5f6ef999b9cad5904b18c4c1",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/e06321b7db5e0a5cf91a4a557c5492a83615983a"
        },
        "date": 1612275364645,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1068.5834740345156,
            "unit": "iter/sec",
            "range": "stddev: 0.00009828477705380135",
            "extra": "mean: 935.8183280005505 usec\nrounds: 500"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1555.6392827324187,
            "unit": "iter/sec",
            "range": "stddev: 0.00007447109098813303",
            "extra": "mean: 642.8225431820799 usec\nrounds: 1320"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 12147.782171508376,
            "unit": "iter/sec",
            "range": "stddev: 0.000013082747143228573",
            "extra": "mean: 82.31955313994828 usec\nrounds: 1656"
          }
        ]
      }
    ]
  }
}