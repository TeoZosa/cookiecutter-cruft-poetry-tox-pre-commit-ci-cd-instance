window.BENCHMARK_DATA = {
  "lastUpdate": 1629209589089,
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
        "date": 1629209586902,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 372.9071392550569,
            "unit": "iter/sec",
            "range": "stddev: 0.00003904099287603393",
            "extra": "mean: 2.681632757146092 msec\nrounds: 140"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1058.6790512541272,
            "unit": "iter/sec",
            "range": "stddev: 0.000018508342933324702",
            "extra": "mean: 944.5733329807413 usec\nrounds: 943"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2289.9007932822915,
            "unit": "iter/sec",
            "range": "stddev: 0.000011155230127795408",
            "extra": "mean: 436.700141304647 usec\nrounds: 828"
          }
        ]
      }
    ]
  }
}