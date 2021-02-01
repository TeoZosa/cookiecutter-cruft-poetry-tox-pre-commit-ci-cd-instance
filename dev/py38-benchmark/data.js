window.BENCHMARK_DATA = {
  "lastUpdate": 1612145672159,
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
        "date": 1612145669892,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1004.6629782830024,
            "unit": "iter/sec",
            "range": "stddev: 0.0001351660196502487",
            "extra": "mean: 995.3586641651995 usec\nrounds: 533"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1393.1956620299316,
            "unit": "iter/sec",
            "range": "stddev: 0.00016112329228040202",
            "extra": "mean: 717.7742705162943 usec\nrounds: 658"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 9060.293208681946,
            "unit": "iter/sec",
            "range": "stddev: 0.000054664685106646724",
            "extra": "mean: 110.37170397992845 usec\nrounds: 1885"
          }
        ]
      }
    ]
  }
}