window.BENCHMARK_DATA = {
  "lastUpdate": 1612145283857,
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
        "date": 1612145282869,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1061.6796229445652,
            "unit": "iter/sec",
            "range": "stddev: 0.00010197619191271613",
            "extra": "mean: 941.9037329043796 usec\nrounds: 468"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1472.2928050534974,
            "unit": "iter/sec",
            "range": "stddev: 0.00014109270684044706",
            "extra": "mean: 679.2127194859611 usec\nrounds: 1401"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8732.702652065238,
            "unit": "iter/sec",
            "range": "stddev: 0.00003971442054359722",
            "extra": "mean: 114.51208633142974 usec\nrounds: 834"
          }
        ]
      }
    ]
  }
}