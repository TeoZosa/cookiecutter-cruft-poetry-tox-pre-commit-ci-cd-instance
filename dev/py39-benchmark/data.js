window.BENCHMARK_DATA = {
  "lastUpdate": 1622640344900,
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
          "id": "d2a5f5c56a6fe1c0b835134c454786d0e109f70b",
          "message": "Merge pull request #197 from TeoZosa/dependabot/pip/hypothesis-6.13.11\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@6051928",
          "timestamp": "2021-06-02T13:19:38Z",
          "tree_id": "789b0ccc4773f83c1c4bc31435d768b771d76695",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/d2a5f5c56a6fe1c0b835134c454786d0e109f70b"
        },
        "date": 1622640342814,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1266.3000950105386,
            "unit": "iter/sec",
            "range": "stddev: 0.000015846148483596628",
            "extra": "mean: 789.7022229882069 usec\nrounds: 583"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1827.682606195005,
            "unit": "iter/sec",
            "range": "stddev: 0.00014725249551041493",
            "extra": "mean: 547.1409513941093 usec\nrounds: 1543"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 14479.758037583246,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037641958070557666",
            "extra": "mean: 69.0619275131828 usec\nrounds: 1890"
          }
        ]
      }
    ]
  }
}