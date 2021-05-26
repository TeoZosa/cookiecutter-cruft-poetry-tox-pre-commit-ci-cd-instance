window.BENCHMARK_DATA = {
  "lastUpdate": 1622052389647,
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
        "date": 1622052388611,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1263.6573388835725,
            "unit": "iter/sec",
            "range": "stddev: 0.00001617134238362107",
            "extra": "mean: 791.3537707013904 usec\nrounds: 628"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1853.2642825303012,
            "unit": "iter/sec",
            "range": "stddev: 0.000013889363668978272",
            "extra": "mean: 539.5884491092003 usec\nrounds: 1572"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13651.845101909761,
            "unit": "iter/sec",
            "range": "stddev: 0.0000052201457854393515",
            "extra": "mean: 73.25017186578756 usec\nrounds: 1699"
          }
        ]
      }
    ]
  }
}