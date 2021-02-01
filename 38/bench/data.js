window.BENCHMARK_DATA = {
  "lastUpdate": 1612143563038,
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
          "id": "621699ff50def9527a8c55be3de7bb63db6912df",
          "message": ":alembic: Test `test-performance` CI test job\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@6d9ddf3",
          "timestamp": "2021-02-01T01:34:49Z",
          "tree_id": "4e702d7c7f75b07a40a2c10a0f3b01e33950e7ec",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/621699ff50def9527a8c55be3de7bb63db6912df"
        },
        "date": 1612143561779,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1089.5748531961829,
            "unit": "iter/sec",
            "range": "stddev: 0.00024414058110227798",
            "extra": "mean: 917.7891698459982 usec\nrounds: 524"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1609.723684383171,
            "unit": "iter/sec",
            "range": "stddev: 0.00023945318987638362",
            "extra": "mean: 621.2246298551477 usec\nrounds: 1313"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 11372.59850689323,
            "unit": "iter/sec",
            "range": "stddev: 0.00011888564157069749",
            "extra": "mean: 87.93065185532348 usec\nrounds: 1508"
          }
        ]
      }
    ]
  }
}