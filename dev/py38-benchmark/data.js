window.BENCHMARK_DATA = {
  "lastUpdate": 1620875315287,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action",
            "username": "actions-user"
          },
          "distinct": true,
          "id": "de33c4e9a77ade9dbe06a63e83bf69ce7f2cd964",
          "message": ":bug: Fix Python versions `3.7` & `3.8` type annotation compatibility\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@fc9aa25",
          "timestamp": "2021-05-13T03:03:03Z",
          "tree_id": "ac33d65f71faf94f8d30e35dc4fcc8877e4b8570",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/de33c4e9a77ade9dbe06a63e83bf69ce7f2cd964"
        },
        "date": 1620875313546,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 965.6592573451533,
            "unit": "iter/sec",
            "range": "stddev: 0.00012063862741730017",
            "extra": "mean: 1.0355619670123168 msec\nrounds: 485"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1374.9269853959129,
            "unit": "iter/sec",
            "range": "stddev: 0.00009589745661637708",
            "extra": "mean: 727.3113486183037 usec\nrounds: 1265"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 7898.691384368483,
            "unit": "iter/sec",
            "range": "stddev: 0.0002591833718566694",
            "extra": "mean: 126.60324999898094 usec\nrounds: 1472"
          }
        ]
      }
    ]
  }
}