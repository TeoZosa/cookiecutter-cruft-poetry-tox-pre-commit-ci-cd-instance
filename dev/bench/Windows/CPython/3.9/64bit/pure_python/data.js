window.BENCHMARK_DATA = {
  "lastUpdate": 1633123320303,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "d7eeca1d9e67b4f46517bd1680a8ad8a1193af48",
          "message": "Merge pull request #362 from TeoZosa/streamline-and-expand-performance-testing-workflow\n\n👷‍♀️ Streamline and Expand Performance Testing\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@587e34c",
          "timestamp": "2021-10-01T21:00:00Z",
          "tree_id": "ea2e1a176cf76eab14a790bf919b66f4f819c49c"
        },
        "date": 1633123314292,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 397.51552795031057,
            "unit": "iter/sec",
            "range": "stddev: 0.00011529137302697227",
            "extra": "mean: 2.515625 msec\nrounds: 10"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1032.2580645161288,
            "unit": "iter/sec",
            "range": "stddev: 0.00004034357652299396",
            "extra": "mean: 968.75 usec\nrounds: 10"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2176.8707482993195,
            "unit": "iter/sec",
            "range": "stddev: 0.000019764235376052364",
            "extra": "mean: 459.375 usec\nrounds: 10"
          }
        ]
      }
    ]
  }
}