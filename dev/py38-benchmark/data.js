window.BENCHMARK_DATA = {
  "lastUpdate": 1621728511287,
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
        "date": 1621728509554,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 917.8301103335851,
            "unit": "iter/sec",
            "range": "stddev: 0.000195760739017619",
            "extra": "mean: 1.0895262519079378 msec\nrounds: 524"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1322.453899438203,
            "unit": "iter/sec",
            "range": "stddev: 0.000147283678854682",
            "extra": "mean: 756.1700263614588 usec\nrounds: 1176"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8368.142618271762,
            "unit": "iter/sec",
            "range": "stddev: 0.00003230373269818073",
            "extra": "mean: 119.50083138120867 usec\nrounds: 1708"
          }
        ]
      }
    ]
  }
}