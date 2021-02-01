window.BENCHMARK_DATA = {
  "lastUpdate": 1612145315004,
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
          "id": "8c86ebe80e925228b5ae0da57757d0070edec247",
          "message": ":alembic: Test `test-performance` CI test job\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@41a6fe3",
          "timestamp": "2021-02-01T02:03:25Z",
          "tree_id": "7e1710f74b44a44161665f3da53ce50e71900c0b",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/8c86ebe80e925228b5ae0da57757d0070edec247"
        },
        "date": 1612145313720,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1079.7921241572294,
            "unit": "iter/sec",
            "range": "stddev: 0.00039022248270659905",
            "extra": "mean: 926.1041802657094 usec\nrounds: 527"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1699.293551490471,
            "unit": "iter/sec",
            "range": "stddev: 0.00005304095216414439",
            "extra": "mean: 588.4798415923417 usec\nrounds: 1332"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13645.062765768364,
            "unit": "iter/sec",
            "range": "stddev: 0.000007935257329143211",
            "extra": "mean: 73.28658117342778 usec\nrounds: 1891"
          }
        ]
      }
    ]
  }
}