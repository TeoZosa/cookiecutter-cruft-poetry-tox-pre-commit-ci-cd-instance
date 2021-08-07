window.BENCHMARK_DATA = {
  "lastUpdate": 1628357005264,
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
        "date": 1628357002986,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1102.7782258193986,
            "unit": "iter/sec",
            "range": "stddev: 0.000039320770883875664",
            "extra": "mean: 906.8006391375463 usec\nrounds: 557"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1579.094573528425,
            "unit": "iter/sec",
            "range": "stddev: 0.00003109242441963467",
            "extra": "mean: 633.2742932334567 usec\nrounds: 1330"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 12035.065815102404,
            "unit": "iter/sec",
            "range": "stddev: 0.000007341396754120897",
            "extra": "mean: 83.09053023583247 usec\nrounds: 1571"
          }
        ]
      }
    ]
  }
}