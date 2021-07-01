window.BENCHMARK_DATA = {
  "lastUpdate": 1625146799418,
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
          "id": "4e10b96990238f5cc1f5f41f46e0d4036038c8db",
          "message": "Merge pull request #237 from TeoZosa/dependabot/pip/cruft-2.9.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@4c87803",
          "timestamp": "2021-07-01T13:34:35Z",
          "tree_id": "d1998ecd30bad9956612602239b85f02263fdfb2"
        },
        "date": 1625146797634,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1239.5136483226486,
            "unit": "iter/sec",
            "range": "stddev: 0.000018171916149313015",
            "extra": "mean: 806.7680427345302 usec\nrounds: 585"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1818.4988598690707,
            "unit": "iter/sec",
            "range": "stddev: 0.000018200641918905236",
            "extra": "mean: 549.9041116099454 usec\nrounds: 1335"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 14537.257571049155,
            "unit": "iter/sec",
            "range": "stddev: 0.000004317625360984241",
            "extra": "mean: 68.78876535774484 usec\nrounds: 1807"
          }
        ]
      }
    ]
  }
}