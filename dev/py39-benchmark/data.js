window.BENCHMARK_DATA = {
  "lastUpdate": 1624890368367,
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
          "id": "eae9ae738db0d7b42280088d9ddb16356bddbf10",
          "message": "Merge pull request #225 from TeoZosa/dependabot/pip/dot-github/workflows/poetry-1.1.7\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@49a8747",
          "timestamp": "2021-06-28T14:09:16Z",
          "tree_id": "2f3b10add4ec78c203782d2d8a33d04ed3196ef0"
        },
        "date": 1624890365920,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1100.9361950995524,
            "unit": "iter/sec",
            "range": "stddev: 0.00013204295843439036",
            "extra": "mean: 908.3178520709594 usec\nrounds: 507"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1568.7146003106177,
            "unit": "iter/sec",
            "range": "stddev: 0.00011334227426954592",
            "extra": "mean: 637.4645839351481 usec\nrounds: 1519"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 10589.782704021472,
            "unit": "iter/sec",
            "range": "stddev: 0.00001998867363877745",
            "extra": "mean: 94.43064394704244 usec\nrounds: 1966"
          }
        ]
      }
    ]
  }
}