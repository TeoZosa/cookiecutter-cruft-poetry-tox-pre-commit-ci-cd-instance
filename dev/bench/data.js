window.BENCHMARK_DATA = {
  "lastUpdate": 1612137280501,
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
          "id": "fd87da65720517acf537c0ec70a12c7cf757922b",
          "message": ":alembic: Test `test-performance` CI test job\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@61a1df4",
          "timestamp": "2021-01-31T23:50:07Z",
          "tree_id": "ea204ffa5835479e79fec9c734a952d97132a011",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/fd87da65720517acf537c0ec70a12c7cf757922b"
        },
        "date": 1612137250443,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1107.0718998032798,
            "unit": "iter/sec",
            "range": "stddev: 0.000037804046571513484",
            "extra": "mean: 903.2836983557203 usec\nrounds: 547"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1646.115669012052,
            "unit": "iter/sec",
            "range": "stddev: 0.00004076541570256425",
            "extra": "mean: 607.4907242698013 usec\nrounds: 1302"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13769.265785334379,
            "unit": "iter/sec",
            "range": "stddev: 0.000008972407690641529",
            "extra": "mean: 72.62551363233167 usec\nrounds: 1577"
          }
        ]
      },
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
          "id": "fd87da65720517acf537c0ec70a12c7cf757922b",
          "message": ":alembic: Test `test-performance` CI test job\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@61a1df4",
          "timestamp": "2021-01-31T23:50:07Z",
          "tree_id": "ea204ffa5835479e79fec9c734a952d97132a011",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/fd87da65720517acf537c0ec70a12c7cf757922b"
        },
        "date": 1612137279708,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 943.2474542485727,
            "unit": "iter/sec",
            "range": "stddev: 0.00025043260329245384",
            "extra": "mean: 1.0601671867714062 msec\nrounds: 514"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1273.0103599427946,
            "unit": "iter/sec",
            "range": "stddev: 0.00017222790845115615",
            "extra": "mean: 785.5395615515157 usec\nrounds: 1186"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8659.532252354236,
            "unit": "iter/sec",
            "range": "stddev: 0.00005065963532793422",
            "extra": "mean: 115.47967844661974 usec\nrounds: 1726"
          }
        ]
      }
    ]
  }
}