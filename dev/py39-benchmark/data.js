window.BENCHMARK_DATA = {
  "lastUpdate": 1630689139985,
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
        "date": 1630689137096,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 350.4539253199978,
            "unit": "iter/sec",
            "range": "stddev: 0.00021386067351152435",
            "extra": "mean: 2.8534421438906836 msec\nrounds: 139"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1005.4824973514162,
            "unit": "iter/sec",
            "range": "stddev: 0.00009762750397247055",
            "extra": "mean: 994.5473965326519 usec\nrounds: 923"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2147.1375428656424,
            "unit": "iter/sec",
            "range": "stddev: 0.000054476032479187774",
            "extra": "mean: 465.7363489929789 usec\nrounds: 745"
          }
        ]
      }
    ]
  }
}