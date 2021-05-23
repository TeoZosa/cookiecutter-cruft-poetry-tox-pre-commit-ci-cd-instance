window.BENCHMARK_DATA = {
  "lastUpdate": 1621791673120,
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
          "id": "451d5ecdff0bd6b5559471f172c0d0607a59e370",
          "message": ":memo: :bulb: Update Poetry install hint message\n\nNewer Poetry versions use a new default install directory.\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@b91c3da",
          "timestamp": "2021-05-23T17:35:31Z",
          "tree_id": "f239ed1817a53284fb1190c314bdafbde6592939",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/451d5ecdff0bd6b5559471f172c0d0607a59e370"
        },
        "date": 1621791671580,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1383.8272208677847,
            "unit": "iter/sec",
            "range": "stddev: 0.00008423656883403047",
            "extra": "mean: 722.6335664743679 usec\nrounds: 692"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 2086.625599962292,
            "unit": "iter/sec",
            "range": "stddev: 0.00006216791021213982",
            "extra": "mean: 479.24265858622226 usec\nrounds: 1485"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 16581.126796517416,
            "unit": "iter/sec",
            "range": "stddev: 0.000010059517946253549",
            "extra": "mean: 60.309532173050684 usec\nrounds: 2300"
          }
        ]
      }
    ]
  }
}