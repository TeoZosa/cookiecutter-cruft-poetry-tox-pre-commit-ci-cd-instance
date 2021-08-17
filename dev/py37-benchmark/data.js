window.BENCHMARK_DATA = {
  "lastUpdate": 1629209563304,
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
          "id": "07881b888615f67110ee5e892d7d8906dbf2efa6",
          "message": "Merge pull request #287 from TeoZosa/dependabot/pip/icontract-2.5.4\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@63fb803",
          "timestamp": "2021-08-17T13:49:43Z",
          "tree_id": "6fb9ac1e2213bc90edcc238550dbd1f67ae9937b"
        },
        "date": 1629209561715,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 356.94098971190425,
            "unit": "iter/sec",
            "range": "stddev: 0.00002137316168125419",
            "extra": "mean: 2.8015835357186756 msec\nrounds: 140"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1029.617580803369,
            "unit": "iter/sec",
            "range": "stddev: 0.000013735217770885444",
            "extra": "mean: 971.2343870621754 usec\nrounds: 943"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2140.489485178262,
            "unit": "iter/sec",
            "range": "stddev: 0.00001062852423969954",
            "extra": "mean: 467.18286024036183 usec\nrounds: 830"
          }
        ]
      }
    ]
  }
}