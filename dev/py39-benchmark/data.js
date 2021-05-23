window.BENCHMARK_DATA = {
  "lastUpdate": 1621728467645,
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
        "date": 1621728466136,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 912.5852686899708,
            "unit": "iter/sec",
            "range": "stddev: 0.0001634176259933442",
            "extra": "mean: 1.0957880148947774 msec\nrounds: 470"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1319.4481844435288,
            "unit": "iter/sec",
            "range": "stddev: 0.00019782507494357793",
            "extra": "mean: 757.8925885761444 usec\nrounds: 1208"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 9481.252293747883,
            "unit": "iter/sec",
            "range": "stddev: 0.000023695663839131078",
            "extra": "mean: 105.4712994674152 usec\nrounds: 1693"
          }
        ]
      }
    ]
  }
}