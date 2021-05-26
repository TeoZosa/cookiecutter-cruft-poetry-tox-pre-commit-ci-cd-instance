window.BENCHMARK_DATA = {
  "lastUpdate": 1622052431290,
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
          "id": "53b69ce3b3cbaab482397295cbecdc719b1a4adb",
          "message": ":green_heart: Deduplicate Reset Instance workflow runs and document explanation\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@f98e9ad",
          "timestamp": "2021-05-26T18:00:24Z",
          "tree_id": "a6ce466d5fe1cdc297f4742f44e41ffca2737188",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/53b69ce3b3cbaab482397295cbecdc719b1a4adb"
        },
        "date": 1622052429700,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 972.6169512763039,
            "unit": "iter/sec",
            "range": "stddev: 0.00013208782666586792",
            "extra": "mean: 1.028153990826258 msec\nrounds: 436"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1395.1108831919375,
            "unit": "iter/sec",
            "range": "stddev: 0.00010264213304737394",
            "extra": "mean: 716.7889033393924 usec\nrounds: 1138"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8917.674952786658,
            "unit": "iter/sec",
            "range": "stddev: 0.000026409321685156598",
            "extra": "mean: 112.13685240764612 usec\nrounds: 1267"
          }
        ]
      }
    ]
  }
}