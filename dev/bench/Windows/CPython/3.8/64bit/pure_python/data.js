window.BENCHMARK_DATA = {
  "lastUpdate": 1633123324521,
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
        "date": 1633123319339,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 357.5418994413409,
            "unit": "iter/sec",
            "range": "stddev: 0.00004941058844013083",
            "extra": "mean: 2.796875 msec\nrounds: 10"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1027.6923076923076,
            "unit": "iter/sec",
            "range": "stddev: 0.0000483156605065796",
            "extra": "mean: 973.0538922155689 usec\nrounds: 10"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1993.769470404984,
            "unit": "iter/sec",
            "range": "stddev: 0.000004941058844013097",
            "extra": "mean: 501.56250000000006 usec\nrounds: 10"
          }
        ]
      }
    ]
  }
}