window.BENCHMARK_DATA = {
  "lastUpdate": 1614867282050,
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
        "date": 1614867281177,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1226.841354861916,
            "unit": "iter/sec",
            "range": "stddev: 0.000016950152261277187",
            "extra": "mean: 815.1013136597049 usec\nrounds: 593"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1755.1776632228086,
            "unit": "iter/sec",
            "range": "stddev: 0.00001785727566579646",
            "extra": "mean: 569.7428932429709 usec\nrounds: 1480"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13584.438076600918,
            "unit": "iter/sec",
            "range": "stddev: 0.000004628062976177401",
            "extra": "mean: 73.61364484575124 usec\nrounds: 1940"
          }
        ]
      }
    ]
  }
}