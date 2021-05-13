window.BENCHMARK_DATA = {
  "lastUpdate": 1620875302376,
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
        "date": 1620875300590,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 946.5929411194146,
            "unit": "iter/sec",
            "range": "stddev: 0.00040101791578728686",
            "extra": "mean: 1.056420301230461 msec\nrounds: 488"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1294.4045840904962,
            "unit": "iter/sec",
            "range": "stddev: 0.00011231404287674631",
            "extra": "mean: 772.5559784714782 usec\nrounds: 1022"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8609.138079783273,
            "unit": "iter/sec",
            "range": "stddev: 0.000028699423891215925",
            "extra": "mean: 116.1556465621439 usec\nrounds: 1774"
          }
        ]
      }
    ]
  }
}