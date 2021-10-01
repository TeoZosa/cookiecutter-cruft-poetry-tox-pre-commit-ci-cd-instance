window.BENCHMARK_DATA = {
  "lastUpdate": 1633123079189,
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
        "date": 1633123074615,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 292.87740181405707,
            "unit": "iter/sec",
            "range": "stddev: 0.0004216907895260164",
            "extra": "mean: 3.4143979487870597 msec\nrounds: 371"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 855.1914183997125,
            "unit": "iter/sec",
            "range": "stddev: 0.00016225693137668723",
            "extra": "mean: 1.1693288525640988 msec\nrounds: 1092"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1713.2235027530571,
            "unit": "iter/sec",
            "range": "stddev: 0.00009833047425981885",
            "extra": "mean: 583.6950044130579 usec\nrounds: 2266"
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
        "date": 1633123074615,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 292.87740181405707,
            "unit": "iter/sec",
            "range": "stddev: 0.0004216907895260164",
            "extra": "mean: 3.4143979487870597 msec\nrounds: 371"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 855.1914183997125,
            "unit": "iter/sec",
            "range": "stddev: 0.00016225693137668723",
            "extra": "mean: 1.1693288525640988 msec\nrounds: 1092"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1713.2235027530571,
            "unit": "iter/sec",
            "range": "stddev: 0.00009833047425981885",
            "extra": "mean: 583.6950044130579 usec\nrounds: 2266"
          }
        ]
      }
    ]
  }
}