window.BENCHMARK_DATA = {
  "lastUpdate": 1628357062764,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "57ae9458320c6fe1d2607a9f3ec39626dbbec470",
          "message": ":bookmark: Bump version number to `0.4.0`\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@3d14fa0",
          "timestamp": "2021-08-07T17:14:53Z",
          "tree_id": "a49d4bf3f71fdad3b027cc1c379ad3f409bc9f22"
        },
        "date": 1628357060076,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 997.2197241953559,
            "unit": "iter/sec",
            "range": "stddev: 0.00015167702961227104",
            "extra": "mean: 1.0027880272894596 msec\nrounds: 513"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1430.9270260489832,
            "unit": "iter/sec",
            "range": "stddev: 0.00025521346495391414",
            "extra": "mean: 698.847657354798 usec\nrounds: 1217"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8918.87448752129,
            "unit": "iter/sec",
            "range": "stddev: 0.000033593512376036607",
            "extra": "mean: 112.12177067847911 usec\nrounds: 2019"
          }
        ]
      }
    ]
  }
}