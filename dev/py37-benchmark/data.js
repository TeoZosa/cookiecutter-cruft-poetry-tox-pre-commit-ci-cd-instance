window.BENCHMARK_DATA = {
  "lastUpdate": 1624582893486,
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
        "date": 1624582891769,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 993.0950751962513,
            "unit": "iter/sec",
            "range": "stddev: 0.0002194611965923781",
            "extra": "mean: 1.0069529342922017 msec\nrounds: 487"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1375.0820037685387,
            "unit": "iter/sec",
            "range": "stddev: 0.00034778985401138406",
            "extra": "mean: 727.2293559652502 usec\nrounds: 1458"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 9091.643025964433,
            "unit": "iter/sec",
            "range": "stddev: 0.00004264855541069262",
            "extra": "mean: 109.99112010272982 usec\nrounds: 1940"
          }
        ]
      }
    ]
  }
}