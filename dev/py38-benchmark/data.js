window.BENCHMARK_DATA = {
  "lastUpdate": 1622050545154,
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
        "date": 1622050543645,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1115.1157432240038,
            "unit": "iter/sec",
            "range": "stddev: 0.00012103357523300618",
            "extra": "mean: 896.7678970335553 usec\nrounds: 573"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1541.8663770119758,
            "unit": "iter/sec",
            "range": "stddev: 0.00016633377197230846",
            "extra": "mean: 648.5646323891741 usec\nrounds: 1235"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 10514.139471164934,
            "unit": "iter/sec",
            "range": "stddev: 0.00002269054302161074",
            "extra": "mean: 95.11001853670513 usec\nrounds: 1996"
          }
        ]
      }
    ]
  }
}