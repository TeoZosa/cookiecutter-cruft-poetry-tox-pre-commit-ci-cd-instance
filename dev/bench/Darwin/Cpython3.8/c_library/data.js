window.BENCHMARK_DATA = {
  "lastUpdate": 1633124148694,
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
        "date": 1633124146479,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 327.49657489255503,
            "unit": "iter/sec",
            "range": "stddev: 0.0002433833530174988",
            "extra": "mean: 3.0534670487106 msec\nrounds: 349"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 988.6060839003488,
            "unit": "iter/sec",
            "range": "stddev: 0.00006199179778183397",
            "extra": "mean: 1.011525233644829 msec\nrounds: 1070"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1853.651899270845,
            "unit": "iter/sec",
            "range": "stddev: 0.00003126823063699262",
            "extra": "mean: 539.4756158874065 usec\nrounds: 1989"
          }
        ]
      }
    ]
  }
}