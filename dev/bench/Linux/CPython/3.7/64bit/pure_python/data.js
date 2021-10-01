window.BENCHMARK_DATA = {
  "lastUpdate": 1633123040460,
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
        "date": 1633123036816,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 312.7476046428678,
            "unit": "iter/sec",
            "range": "stddev: 0.00013840547013370115",
            "extra": "mean: 3.1974665358090215 msec\nrounds: 377"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 911.1596797757052,
            "unit": "iter/sec",
            "range": "stddev: 0.00006890328406304369",
            "extra": "mean: 1.0975024709677277 msec\nrounds: 1085"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1888.4949161059078,
            "unit": "iter/sec",
            "range": "stddev: 0.00002464553790007694",
            "extra": "mean: 529.5222091791533 usec\nrounds: 2266"
          }
        ]
      }
    ]
  }
}