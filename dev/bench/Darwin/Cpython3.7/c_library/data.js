window.BENCHMARK_DATA = {
  "lastUpdate": 1633123923731,
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
        "date": 1633123921012,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 306.80545961268217,
            "unit": "iter/sec",
            "range": "stddev: 0.00007268956118381636",
            "extra": "mean: 3.2593944099378853 msec\nrounds: 322"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 912.095900368985,
            "unit": "iter/sec",
            "range": "stddev: 0.00002891742825782208",
            "extra": "mean: 1.0963759398495856 msec\nrounds: 931"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1693.0197743645417,
            "unit": "iter/sec",
            "range": "stddev: 0.000025439471054493736",
            "extra": "mean: 590.6605552645362 usec\nrounds: 1909"
          }
        ]
      }
    ]
  }
}