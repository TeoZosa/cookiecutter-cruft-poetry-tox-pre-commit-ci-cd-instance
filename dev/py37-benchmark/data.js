window.BENCHMARK_DATA = {
  "lastUpdate": 1619995025068,
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
          "id": "28629ee6af9aee67c9906e766f7bbecc4524c5a1",
          "message": ":arrow_up: Upgrade template dependencies\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@f346cea",
          "timestamp": "2021-05-02T22:32:19Z",
          "tree_id": "4e3fb448711e5ff8e4ac976e100fb90cf3c84641",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/28629ee6af9aee67c9906e766f7bbecc4524c5a1"
        },
        "date": 1619995023530,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 957.2226559722847,
            "unit": "iter/sec",
            "range": "stddev: 0.00010095990297182458",
            "extra": "mean: 1.0446890216824893 msec\nrounds: 369"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1325.398632286118,
            "unit": "iter/sec",
            "range": "stddev: 0.00008323058456359049",
            "extra": "mean: 754.4899893816449 usec\nrounds: 1036"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8256.260601588445,
            "unit": "iter/sec",
            "range": "stddev: 0.00005809791332969019",
            "extra": "mean: 121.12020783447741 usec\nrounds: 1838"
          }
        ]
      }
    ]
  }
}