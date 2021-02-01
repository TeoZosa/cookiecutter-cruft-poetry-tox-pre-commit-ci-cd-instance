window.BENCHMARK_DATA = {
  "lastUpdate": 1612145692367,
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
          "id": "f67f1b7600cd5986ce477b4664e2c277b84b5f45",
          "message": ":alembic: Test `test-performance` CI test job\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@7a26608",
          "timestamp": "2021-02-01T02:09:58Z",
          "tree_id": "63a4e5176c77b34f73bf4d3275c31f7464e9efd1",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/f67f1b7600cd5986ce477b4664e2c277b84b5f45"
        },
        "date": 1612145690968,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1055.282399347097,
            "unit": "iter/sec",
            "range": "stddev: 0.0000188516727311378",
            "extra": "mean: 947.6136441001005 usec\nrounds: 517"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1507.2133752777524,
            "unit": "iter/sec",
            "range": "stddev: 0.000020764575248338045",
            "extra": "mean: 663.476065434808 usec\nrounds: 1299"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 11971.360928239275,
            "unit": "iter/sec",
            "range": "stddev: 0.000005476903022208069",
            "extra": "mean: 83.53269156233502 usec\nrounds: 1754"
          }
        ]
      }
    ]
  }
}