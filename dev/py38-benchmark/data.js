window.BENCHMARK_DATA = {
  "lastUpdate": 1620407457106,
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
          "id": "f025e4acbc86319185258375de20b7ebf4f806f0",
          "message": ":green_heart: Add `flakehell` pre-commit hook `flake8` compatibility fix\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@30ee29c",
          "timestamp": "2021-05-07T17:07:00Z",
          "tree_id": "13683acbf94bb3e1760b740c154023682367f8bc",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/f025e4acbc86319185258375de20b7ebf4f806f0"
        },
        "date": 1620407455997,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1003.0701534993442,
            "unit": "iter/sec",
            "range": "stddev: 0.00018809532109689806",
            "extra": "mean: 996.9392434929565 usec\nrounds: 538"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1405.4980835793938,
            "unit": "iter/sec",
            "range": "stddev: 0.00011468189200867384",
            "extra": "mean: 711.4915428794408 usec\nrounds: 1306"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8837.338743616432,
            "unit": "iter/sec",
            "range": "stddev: 0.00004759374018711752",
            "extra": "mean: 113.15623730303884 usec\nrounds: 1083"
          }
        ]
      }
    ]
  }
}