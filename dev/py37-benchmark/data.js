window.BENCHMARK_DATA = {
  "lastUpdate": 1621718405935,
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
          "id": "63b2fa2818582da447a44e161e578ff5d81d4e39",
          "message": ":art: :construction_worker: Improve \"Install Package\" step structure\n\nAlso fixes `yamllint` line length errors for test instance.\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@01e68bc",
          "timestamp": "2021-05-22T21:13:48Z",
          "tree_id": "da46dbc45159aa40ac43da419b4856e15c37755e",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/63b2fa2818582da447a44e161e578ff5d81d4e39"
        },
        "date": 1621718404576,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1106.2283670518552,
            "unit": "iter/sec",
            "range": "stddev: 0.00005094763864804789",
            "extra": "mean: 903.9724796291761 usec\nrounds: 540"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1558.4618851855985,
            "unit": "iter/sec",
            "range": "stddev: 0.00003788848490762209",
            "extra": "mean: 641.6582975212829 usec\nrounds: 1331"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 12155.703010791804,
            "unit": "iter/sec",
            "range": "stddev: 0.000009065657326274234",
            "extra": "mean: 82.265912478464 usec\nrounds: 1771"
          }
        ]
      }
    ]
  }
}