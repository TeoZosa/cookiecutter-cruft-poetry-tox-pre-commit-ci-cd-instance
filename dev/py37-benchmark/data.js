window.BENCHMARK_DATA = {
  "lastUpdate": 1622468310115,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action",
            "username": "actions-user"
          },
          "distinct": true,
          "id": "24f1cca2531a535fe8d4d3d1925fd66c33689859",
          "message": "Merge pull request #193 from TeoZosa/dependabot/pip/hypothesis-6.13.10\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@db48f31",
          "timestamp": "2021-05-31T13:31:19Z",
          "tree_id": "2a581f9c9c650e902233c54e70869ac326eb63f2",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/24f1cca2531a535fe8d4d3d1925fd66c33689859"
        },
        "date": 1622468308245,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1078.5997447754366,
            "unit": "iter/sec",
            "range": "stddev: 0.00017558542802826292",
            "extra": "mean: 927.127977587459 usec\nrounds: 580"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1465.5500550352235,
            "unit": "iter/sec",
            "range": "stddev: 0.000186410976486637",
            "extra": "mean: 682.3376632986894 usec\nrounds: 1485"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 10148.047833622473,
            "unit": "iter/sec",
            "range": "stddev: 0.000022289153332804667",
            "extra": "mean: 98.54112006516206 usec\nrounds: 1849"
          }
        ]
      }
    ]
  }
}