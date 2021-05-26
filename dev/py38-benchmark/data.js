window.BENCHMARK_DATA = {
  "lastUpdate": 1622002848244,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action",
            "username": "actions-user"
          },
          "distinct": true,
          "id": "af0ea896e7970e91bfc363dab7682382184363db",
          "message": ":construction_worker: Update test instance template initialization parameters\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@727b8dd",
          "timestamp": "2021-05-26T04:14:31Z",
          "tree_id": "7abf17b0ea810c60a015d368e7d1ddd9ad6fbdf3",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/af0ea896e7970e91bfc363dab7682382184363db"
        },
        "date": 1622002846753,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1087.8405755381496,
            "unit": "iter/sec",
            "range": "stddev: 0.00001775094816336695",
            "extra": "mean: 919.2523449544109 usec\nrounds: 545"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1603.6378225807114,
            "unit": "iter/sec",
            "range": "stddev: 0.000017545505529207466",
            "extra": "mean: 623.5821991219404 usec\nrounds: 1366"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 11769.139752896152,
            "unit": "iter/sec",
            "range": "stddev: 0.000006813610347382643",
            "extra": "mean: 84.96797735398799 usec\nrounds: 1678"
          }
        ]
      }
    ]
  }
}