window.BENCHMARK_DATA = {
  "lastUpdate": 1621723629126,
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
          "id": "74e6aa9049011c42667bcd93cdc2f3ea009537c5",
          "message": ":memo: :cookie: Add \"Monitoring and Observability\" documentation section\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@4f1a6b5",
          "timestamp": "2021-05-22T22:40:21Z",
          "tree_id": "eef8201edf69e353d60f5871f57b9e198a5148da",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/74e6aa9049011c42667bcd93cdc2f3ea009537c5"
        },
        "date": 1621723627631,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1054.7210064399717,
            "unit": "iter/sec",
            "range": "stddev: 0.00003217128318319766",
            "extra": "mean: 948.1180273211085 usec\nrounds: 549"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1508.7371440182983,
            "unit": "iter/sec",
            "range": "stddev: 0.00002791384726944542",
            "extra": "mean: 662.805979136066 usec\nrounds: 1294"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 11792.404385207486,
            "unit": "iter/sec",
            "range": "stddev: 0.000008913936005509093",
            "extra": "mean: 84.80034837122872 usec\nrounds: 1596"
          }
        ]
      }
    ]
  }
}