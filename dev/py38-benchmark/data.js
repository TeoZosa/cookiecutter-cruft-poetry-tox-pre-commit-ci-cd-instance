window.BENCHMARK_DATA = {
  "lastUpdate": 1628461309877,
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
        "date": 1628461307242,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 366.3042919473874,
            "unit": "iter/sec",
            "range": "stddev: 0.0000388117920883014",
            "extra": "mean: 2.7299707428588653 msec\nrounds: 140"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1072.6029518783216,
            "unit": "iter/sec",
            "range": "stddev: 0.000015522863075175403",
            "extra": "mean: 932.3114375630043 usec\nrounds: 969"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2216.9823047885207,
            "unit": "iter/sec",
            "range": "stddev: 0.000010284297871681714",
            "extra": "mean: 451.0635911888303 usec\nrounds: 817"
          }
        ]
      }
    ]
  }
}