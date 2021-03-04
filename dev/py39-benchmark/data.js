window.BENCHMARK_DATA = {
  "lastUpdate": 1614867356340,
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
          "id": "43e9e7ee6d128ae50fe873509e7e0c3d9ab0cf45",
          "message": "Merge pull request #94 from TeoZosa/dependabot/pip/docs/poetry-1.1.5\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@c715940",
          "timestamp": "2021-03-04T14:10:15Z",
          "tree_id": "2d995e8b84f35a168c5081b8f77f4849762c5312",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/43e9e7ee6d128ae50fe873509e7e0c3d9ab0cf45"
        },
        "date": 1614867355370,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1013.8667367056207,
            "unit": "iter/sec",
            "range": "stddev: 0.00004440566948587188",
            "extra": "mean: 986.3229197649009 usec\nrounds: 511"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1419.2686637788836,
            "unit": "iter/sec",
            "range": "stddev: 0.00003878893127251069",
            "extra": "mean: 704.5882330251998 usec\nrounds: 1296"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 9798.485132512595,
            "unit": "iter/sec",
            "range": "stddev: 0.000011747069912452432",
            "extra": "mean: 102.0565920625705 usec\nrounds: 1890"
          }
        ]
      }
    ]
  }
}