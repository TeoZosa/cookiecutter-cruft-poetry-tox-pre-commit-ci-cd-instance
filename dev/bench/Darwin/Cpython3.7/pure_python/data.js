window.BENCHMARK_DATA = {
  "lastUpdate": 1633124032523,
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
        "date": 1633124029646,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 281.4708033229328,
            "unit": "iter/sec",
            "range": "stddev: 0.00027090778802846315",
            "extra": "mean: 3.5527663551401996 msec\nrounds: 321"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 873.5179251043568,
            "unit": "iter/sec",
            "range": "stddev: 0.00005367409746029399",
            "extra": "mean: 1.1447961985216648 msec\nrounds: 947"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1636.463531473699,
            "unit": "iter/sec",
            "range": "stddev: 0.00003668172141696048",
            "extra": "mean: 611.0738068812699 usec\nrounds: 1802"
          }
        ]
      }
    ]
  }
}