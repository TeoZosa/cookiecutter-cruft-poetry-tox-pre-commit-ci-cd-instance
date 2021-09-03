window.BENCHMARK_DATA = {
  "lastUpdate": 1630689169002,
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
        "date": 1630689166063,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 278.38989619004104,
            "unit": "iter/sec",
            "range": "stddev: 0.0006085065982926283",
            "extra": "mean: 3.5920843884267857 msec\nrounds: 121"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 833.1165620944263,
            "unit": "iter/sec",
            "range": "stddev: 0.00014089717018815623",
            "extra": "mean: 1.200312231803476 msec\nrounds: 742"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1641.3709688446706,
            "unit": "iter/sec",
            "range": "stddev: 0.00012129379834434676",
            "extra": "mean: 609.2467936750951 usec\nrounds: 790"
          }
        ]
      }
    ]
  }
}