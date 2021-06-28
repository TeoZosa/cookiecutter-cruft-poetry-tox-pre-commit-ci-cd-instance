window.BENCHMARK_DATA = {
  "lastUpdate": 1624889885477,
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
          "id": "1d0bb67b691af577e5d7eff5c1112ad8ca1f9349",
          "message": "Merge pull request #227 from TeoZosa/dependabot/pip/importlib-metadata-4.6.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@6241b31",
          "timestamp": "2021-06-28T13:52:25Z",
          "tree_id": "909e89b748831183bb75ac4eb6862a6199b60656"
        },
        "date": 1624889882809,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 948.3737653985503,
            "unit": "iter/sec",
            "range": "stddev: 0.0004202499690455536",
            "extra": "mean: 1.0544365908094833 msec\nrounds: 457"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1401.5533979179097,
            "unit": "iter/sec",
            "range": "stddev: 0.00021067016665523802",
            "extra": "mean: 713.4940427425448 usec\nrounds: 1123"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8746.362895151502,
            "unit": "iter/sec",
            "range": "stddev: 0.000039621425185035636",
            "extra": "mean: 114.33323908322447 usec\nrounds: 1878"
          }
        ]
      }
    ]
  }
}