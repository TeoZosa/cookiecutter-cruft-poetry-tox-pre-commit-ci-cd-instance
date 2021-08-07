window.BENCHMARK_DATA = {
  "lastUpdate": 1628294821593,
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
          "id": "23c53e1fcdd323fc74cb21b9e37ac0ae5e849348",
          "message": ":arrow_up: Update `poetry.lock` lockfile\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@ec3211f",
          "timestamp": "2021-08-06T23:58:24Z",
          "tree_id": "8d57cdb727bb4979f1dda372525133336b56c786"
        },
        "date": 1628294818834,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 964.5173344093785,
            "unit": "iter/sec",
            "range": "stddev: 0.0001812369260294362",
            "extra": "mean: 1.0367880019619857 msec\nrounds: 509"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1368.718712111894,
            "unit": "iter/sec",
            "range": "stddev: 0.00013111212941426312",
            "extra": "mean: 730.610308130462 usec\nrounds: 1230"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8851.261056992083,
            "unit": "iter/sec",
            "range": "stddev: 0.00003763443356844017",
            "extra": "mean: 112.97825174979407 usec\nrounds: 1287"
          }
        ]
      }
    ]
  }
}