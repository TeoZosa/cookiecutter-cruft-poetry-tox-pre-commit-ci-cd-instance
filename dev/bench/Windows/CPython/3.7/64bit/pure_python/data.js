window.BENCHMARK_DATA = {
  "lastUpdate": 1633123327709,
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
        "date": 1633123319589,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 253.96825396825398,
            "unit": "iter/sec",
            "range": "stddev: 0.00009882117688026194",
            "extra": "mean: 3.9375 msec\nrounds: 10"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 733.9449541284406,
            "unit": "iter/sec",
            "range": "stddev: 0.00003952847075210471",
            "extra": "mean: 1.3625 msec\nrounds: 10"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1353.065539112051,
            "unit": "iter/sec",
            "range": "stddev: 0.00001655234227299033",
            "extra": "mean: 739.0625 usec\nrounds: 10"
          }
        ]
      },
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
        "date": 1633123319589,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 253.96825396825398,
            "unit": "iter/sec",
            "range": "stddev: 0.00009882117688026194",
            "extra": "mean: 3.9375 msec\nrounds: 10"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 733.9449541284406,
            "unit": "iter/sec",
            "range": "stddev: 0.00003952847075210471",
            "extra": "mean: 1.3625 msec\nrounds: 10"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1353.065539112051,
            "unit": "iter/sec",
            "range": "stddev: 0.00001655234227299033",
            "extra": "mean: 739.0625 usec\nrounds: 10"
          }
        ]
      }
    ]
  }
}