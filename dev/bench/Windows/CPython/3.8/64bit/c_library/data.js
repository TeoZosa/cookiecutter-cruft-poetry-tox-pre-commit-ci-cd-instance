window.BENCHMARK_DATA = {
  "lastUpdate": 1633123329548,
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
        "date": 1633123323780,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 272.34042553191495,
            "unit": "iter/sec",
            "range": "stddev: 0.00011048543456039794",
            "extra": "mean: 3.6718750000000004 msec\nrounds: 10"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 800.0000000000001,
            "unit": "iter/sec",
            "range": "stddev: 0.00005892556509887896",
            "extra": "mean: 1.25 msec\nrounds: 10"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1425.3897550111362,
            "unit": "iter/sec",
            "range": "stddev: 0.000027999333449407552",
            "extra": "mean: 701.5624999999999 usec\nrounds: 10"
          }
        ]
      }
    ]
  }
}