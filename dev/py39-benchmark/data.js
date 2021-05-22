window.BENCHMARK_DATA = {
  "lastUpdate": 1621723592931,
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
        "date": 1621723591577,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1088.7025129037554,
            "unit": "iter/sec",
            "range": "stddev: 0.00017701212356789186",
            "extra": "mean: 918.5245630900854 usec\nrounds: 531"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1529.6336918696734,
            "unit": "iter/sec",
            "range": "stddev: 0.00012954006935792837",
            "extra": "mean: 653.7512904659537 usec\nrounds: 1353"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 10181.543401881996,
            "unit": "iter/sec",
            "range": "stddev: 0.000024744401596830473",
            "extra": "mean: 98.2169363257005 usec\nrounds: 2183"
          }
        ]
      }
    ]
  }
}