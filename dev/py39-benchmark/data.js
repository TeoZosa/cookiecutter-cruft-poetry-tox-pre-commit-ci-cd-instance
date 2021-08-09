window.BENCHMARK_DATA = {
  "lastUpdate": 1628528992975,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "43446c43135a02f6f4946a828b8f9626552e1c73",
          "message": "Merge pull request #155 from TeoZosa/dependabot/pip/structlog-sentry-logger-0.9.0",
          "timestamp": "2021-08-09T16:09:20Z",
          "tree_id": "f0013c7470280898e24c0b68930a489be2662c41"
        },
        "date": 1628528990125,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 329.40746094195185,
            "unit": "iter/sec",
            "range": "stddev: 0.00013094415584824707",
            "extra": "mean: 3.0357539478324687 msec\nrounds: 115"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 950.3446764942402,
            "unit": "iter/sec",
            "range": "stddev: 0.00006764736686917958",
            "extra": "mean: 1.0522498044487767 msec\nrounds: 854"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2051.543776093168,
            "unit": "iter/sec",
            "range": "stddev: 0.00004383456142510747",
            "extra": "mean: 487.4378073980647 usec\nrounds: 649"
          }
        ]
      }
    ]
  }
}