window.BENCHMARK_DATA = {
  "lastUpdate": 1633123069981,
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
        "date": 1633123067013,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 302.43809156953535,
            "unit": "iter/sec",
            "range": "stddev: 0.00046241000189563736",
            "extra": "mean: 3.3064618111111317 msec\nrounds: 360"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 838.2470969740452,
            "unit": "iter/sec",
            "range": "stddev: 0.00023707158128029288",
            "extra": "mean: 1.1929656584673662 msec\nrounds: 1057"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1744.7895267734586,
            "unit": "iter/sec",
            "range": "stddev: 0.00009956790098856269",
            "extra": "mean: 573.1350312775226 usec\nrounds: 2270"
          }
        ]
      }
    ]
  }
}