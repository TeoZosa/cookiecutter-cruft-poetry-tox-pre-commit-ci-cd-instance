window.BENCHMARK_DATA = {
  "lastUpdate": 1621723583493,
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
        "date": 1621723582147,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1188.4824049546826,
            "unit": "iter/sec",
            "range": "stddev: 0.00011302726365484866",
            "extra": "mean: 841.4091751220586 usec\nrounds: 611"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1689.7434917259077,
            "unit": "iter/sec",
            "range": "stddev: 0.00009089493721507023",
            "extra": "mean: 591.8058006417281 usec\nrounds: 1560"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 9817.525182932506,
            "unit": "iter/sec",
            "range": "stddev: 0.000021672363419120452",
            "extra": "mean: 101.85866411002156 usec\nrounds: 1825"
          }
        ]
      }
    ]
  }
}