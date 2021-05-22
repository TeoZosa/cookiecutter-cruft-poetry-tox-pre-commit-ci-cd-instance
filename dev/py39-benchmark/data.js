window.BENCHMARK_DATA = {
  "lastUpdate": 1621720409166,
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
        "date": 1621720407463,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 997.1559878795578,
            "unit": "iter/sec",
            "range": "stddev: 0.0001961746140726829",
            "extra": "mean: 1.002852123594514 msec\nrounds: 445"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1399.5863371992718,
            "unit": "iter/sec",
            "range": "stddev: 0.00014538651586471784",
            "extra": "mean: 714.4968291138875 usec\nrounds: 1106"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 9685.099582972396,
            "unit": "iter/sec",
            "range": "stddev: 0.00004331281760395856",
            "extra": "mean: 103.25139059572747 usec\nrounds: 1595"
          }
        ]
      }
    ]
  }
}