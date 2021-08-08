window.BENCHMARK_DATA = {
  "lastUpdate": 1628461421923,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "5817809472639e70ea3adff571b381e42b13bb97",
          "message": ":construction_worker: Run package root command as part of `verify-user-install` job\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@aa8a1a4",
          "timestamp": "2021-08-08T22:14:43Z",
          "tree_id": "65c93024b9bc73e4aa5c83eeb11e6a3bdc03424b"
        },
        "date": 1628461419834,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 272.3056285368865,
            "unit": "iter/sec",
            "range": "stddev: 0.00019814391189287763",
            "extra": "mean: 3.672344216214172 msec\nrounds: 111"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 775.9432763790978,
            "unit": "iter/sec",
            "range": "stddev: 0.00009215254657729508",
            "extra": "mean: 1.2887539984449021 msec\nrounds: 642"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1643.14233431245,
            "unit": "iter/sec",
            "range": "stddev: 0.00006163328543886713",
            "extra": "mean: 608.5900041145468 usec\nrounds: 729"
          }
        ]
      }
    ]
  }
}