window.BENCHMARK_DATA = {
  "lastUpdate": 1624582928732,
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
        "date": 1624582926528,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 930.2099435537458,
            "unit": "iter/sec",
            "range": "stddev: 0.00024142344897041412",
            "extra": "mean: 1.0750261346160528 msec\nrounds: 520"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1316.0512761998855,
            "unit": "iter/sec",
            "range": "stddev: 0.00008163992634646576",
            "extra": "mean: 759.8488129486203 usec\nrounds: 1251"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8733.916130386133,
            "unit": "iter/sec",
            "range": "stddev: 0.000022488313129532996",
            "extra": "mean: 114.49617617930906 usec\nrounds: 1822"
          }
        ]
      }
    ]
  }
}