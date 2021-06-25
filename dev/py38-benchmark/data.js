window.BENCHMARK_DATA = {
  "lastUpdate": 1624582890730,
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
          "id": "67a30e2aed29f3d6bd05342b8da0dea535b034f6",
          "message": ":arrow_up: Update template dependencies\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@fc5b87a",
          "timestamp": "2021-06-25T00:55:11Z",
          "tree_id": "f457408fb8b8465abbdcedcb824ca3a65301e36c"
        },
        "date": 1624582889011,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1049.790655592521,
            "unit": "iter/sec",
            "range": "stddev: 0.00023953396950463",
            "extra": "mean: 952.5708717949882 usec\nrounds: 468"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1497.7974046417335,
            "unit": "iter/sec",
            "range": "stddev: 0.00015893640483602092",
            "extra": "mean: 667.6470375105207 usec\nrounds: 1253"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8809.535911017909,
            "unit": "iter/sec",
            "range": "stddev: 0.00003804444067317366",
            "extra": "mean: 113.51335758213101 usec\nrounds: 1952"
          }
        ]
      }
    ]
  }
}