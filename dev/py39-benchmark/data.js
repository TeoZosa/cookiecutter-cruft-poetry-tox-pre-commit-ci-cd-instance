window.BENCHMARK_DATA = {
  "lastUpdate": 1625579023339,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "1048a56f2cf9735c0931bb9b6f1b44103e095d6c",
          "message": "Merge pull request #241 from TeoZosa/dependabot/pip/sphinx-4.0.3\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@42db373",
          "timestamp": "2021-07-06T13:25:54Z",
          "tree_id": "f493e1d582799d578ffbfe052ac390e9c53cdff1"
        },
        "date": 1625579021128,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 943.3493953057827,
            "unit": "iter/sec",
            "range": "stddev: 0.00016441680014732654",
            "extra": "mean: 1.0600526220466324 msec\nrounds: 508"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1308.9253236415286,
            "unit": "iter/sec",
            "range": "stddev: 0.0001701085604249827",
            "extra": "mean: 763.9855245660042 usec\nrounds: 1323"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8925.293557098907,
            "unit": "iter/sec",
            "range": "stddev: 0.00004954973206953244",
            "extra": "mean: 112.04113272046166 usec\nrounds: 1522"
          }
        ]
      }
    ]
  }
}