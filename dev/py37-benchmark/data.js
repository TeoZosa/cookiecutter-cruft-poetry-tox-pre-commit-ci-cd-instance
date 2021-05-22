window.BENCHMARK_DATA = {
  "lastUpdate": 1621727983462,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action",
            "username": "actions-user"
          },
          "distinct": true,
          "id": "7d936c8a97a46de8cbe38da5416bc068f333d6aa",
          "message": "Merge pull request #176 from TeoZosa/add-sentry-exception-monitoring-component\n\n✨ Add Sentry Exception Monitoring Support\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@1f44513",
          "timestamp": "2021-05-22T23:52:25Z",
          "tree_id": "1b79d033f8ff7319abc0578589c90029f5058bbf",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/7d936c8a97a46de8cbe38da5416bc068f333d6aa"
        },
        "date": 1621727981864,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 943.5917299952957,
            "unit": "iter/sec",
            "range": "stddev: 0.00025590471615381506",
            "extra": "mean: 1.0597803776904504 msec\nrounds: 511"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1303.5737296480258,
            "unit": "iter/sec",
            "range": "stddev: 0.00018311750534985392",
            "extra": "mean: 767.1219335403507 usec\nrounds: 963"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8646.391138074438,
            "unit": "iter/sec",
            "range": "stddev: 0.00003877842741270994",
            "extra": "mean: 115.65518885636503 usec\nrounds: 1382"
          }
        ]
      }
    ]
  }
}