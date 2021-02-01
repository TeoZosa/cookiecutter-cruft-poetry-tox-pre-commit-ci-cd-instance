window.BENCHMARK_DATA = {
  "lastUpdate": 1612145648786,
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
        "date": 1612145646548,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1095.2135308015866,
            "unit": "iter/sec",
            "range": "stddev: 0.00013104228131424002",
            "extra": "mean: 913.0639568231961 usec\nrounds: 579"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1539.194484018063,
            "unit": "iter/sec",
            "range": "stddev: 0.00011440363632635201",
            "extra": "mean: 649.6904779631894 usec\nrounds: 1316"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 10504.17011763328,
            "unit": "iter/sec",
            "range": "stddev: 0.000026452488283042624",
            "extra": "mean: 95.20028605794441 usec\nrounds: 2080"
          }
        ]
      }
    ]
  }
}