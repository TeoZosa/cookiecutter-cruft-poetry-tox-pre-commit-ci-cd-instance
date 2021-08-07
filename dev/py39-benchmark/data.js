window.BENCHMARK_DATA = {
  "lastUpdate": 1628294752173,
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
        "date": 1628294750218,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1250.9368195770746,
            "unit": "iter/sec",
            "range": "stddev: 0.000016501481087946156",
            "extra": "mean: 799.4008844811897 usec\nrounds: 580"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1832.0517550080988,
            "unit": "iter/sec",
            "range": "stddev: 0.00001638978726484818",
            "extra": "mean: 545.8361082138639 usec\nrounds: 1534"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 14544.3221169017,
            "unit": "iter/sec",
            "range": "stddev: 0.000004226432820011371",
            "extra": "mean: 68.75535291107984 usec\nrounds: 1907"
          }
        ]
      }
    ]
  }
}