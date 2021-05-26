window.BENCHMARK_DATA = {
  "lastUpdate": 1622050620873,
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
          "id": "643d7e32f2c074c180361881da46a69fabe6bae0",
          "message": ":green_heart: Fix Dependabot-merged Reset Instance workflow\n\nsee: dependabot/dependabot-core/issues/3253\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@67d23ab",
          "timestamp": "2021-05-26T17:29:31Z",
          "tree_id": "01287c0f6e9b71cfe03f8c95c7f86c9f55d23d0f",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/643d7e32f2c074c180361881da46a69fabe6bae0"
        },
        "date": 1622050619290,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 927.218416421868,
            "unit": "iter/sec",
            "range": "stddev: 0.00021063216015599704",
            "extra": "mean: 1.0784945405409394 msec\nrounds: 481"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1289.2818917825537,
            "unit": "iter/sec",
            "range": "stddev: 0.00018181135756077484",
            "extra": "mean: 775.6255682901167 usec\nrounds: 1274"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8424.577579460003,
            "unit": "iter/sec",
            "range": "stddev: 0.00004173153657363041",
            "extra": "mean: 118.70031352528632 usec\nrounds: 1767"
          }
        ]
      }
    ]
  }
}