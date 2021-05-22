window.BENCHMARK_DATA = {
  "lastUpdate": 1621720393438,
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
          "id": "2bf6fe01531497757e439fe54d4da1d55c573a90",
          "message": ":art: Trim whitespace in \"verify-user-install\" job render template block\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@e30c118",
          "timestamp": "2021-05-22T21:46:19Z",
          "tree_id": "ce55d1ba026a60b02a47992f7dc583a6650a1f88",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/2bf6fe01531497757e439fe54d4da1d55c573a90"
        },
        "date": 1621720391559,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1074.606516534868,
            "unit": "iter/sec",
            "range": "stddev: 0.0002750040897515436",
            "extra": "mean: 930.5731768913508 usec\nrounds: 554"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1527.3018467430372,
            "unit": "iter/sec",
            "range": "stddev: 0.00012292164091427945",
            "extra": "mean: 654.7494211000233 usec\nrounds: 1109"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 11453.862062577424,
            "unit": "iter/sec",
            "range": "stddev: 0.000016166971085671044",
            "extra": "mean: 87.30679613012325 usec\nrounds: 1447"
          }
        ]
      }
    ]
  }
}