window.BENCHMARK_DATA = {
  "lastUpdate": 1630689174934,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "dc0db44e80d9ee52836ed0c47bcfa11ebc9cfb7a",
          "message": ":arrow_up: update template `nbqa` `pre-commit` hooks\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@3a244b7",
          "timestamp": "2021-09-03T17:02:45Z",
          "tree_id": "d5a34195bc51518991ae181e0e8f286cd19c218f"
        },
        "date": 1630689171977,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 307.9472887817694,
            "unit": "iter/sec",
            "range": "stddev: 0.00022749591747775718",
            "extra": "mean: 3.247308992249847 msec\nrounds: 129"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 878.1662679963944,
            "unit": "iter/sec",
            "range": "stddev: 0.00022406302615971525",
            "extra": "mean: 1.1387365200004538 msec\nrounds: 850"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1786.0146477505964,
            "unit": "iter/sec",
            "range": "stddev: 0.00011150567087463641",
            "extra": "mean: 559.9058223063591 usec\nrounds: 816"
          }
        ]
      }
    ]
  }
}