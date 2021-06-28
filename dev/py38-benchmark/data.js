window.BENCHMARK_DATA = {
  "lastUpdate": 1624889840591,
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
        "date": 1624889839145,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1436.7467467909105,
            "unit": "iter/sec",
            "range": "stddev: 0.000024126070465852265",
            "extra": "mean: 696.0168883163163 usec\nrounds: 582"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 2120.737221663881,
            "unit": "iter/sec",
            "range": "stddev: 0.00001969537660411857",
            "extra": "mean: 471.53413906482166 usec\nrounds: 1733"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 15573.044420627828,
            "unit": "iter/sec",
            "range": "stddev: 0.000005942452299927072",
            "extra": "mean: 64.21352004078372 usec\nrounds: 1971"
          }
        ]
      }
    ]
  }
}