window.BENCHMARK_DATA = {
  "lastUpdate": 1622640984292,
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
          "id": "4db2cfc417d0ce5188bcd610adf4a91cfd10f43b",
          "message": "Merge pull request #198 from TeoZosa/dependabot/pip/pytest-cov-2.12.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@9bdf2a4",
          "timestamp": "2021-06-02T13:29:36Z",
          "tree_id": "5dd56e5938f99229bfe8273e50704f835e459106",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/4db2cfc417d0ce5188bcd610adf4a91cfd10f43b"
        },
        "date": 1622640982093,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1046.4999382053713,
            "unit": "iter/sec",
            "range": "stddev: 0.00013028525124413834",
            "extra": "mean: 955.5662293825707 usec\nrounds: 388"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1436.7677227756087,
            "unit": "iter/sec",
            "range": "stddev: 0.000144608297721559",
            "extra": "mean: 696.0067268689455 usec\nrounds: 1351"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8729.092909217517,
            "unit": "iter/sec",
            "range": "stddev: 0.00003699801711149568",
            "extra": "mean: 114.5594405283562 usec\nrounds: 1816"
          }
        ]
      }
    ]
  }
}