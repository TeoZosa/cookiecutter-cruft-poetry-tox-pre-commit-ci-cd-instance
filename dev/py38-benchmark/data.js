window.BENCHMARK_DATA = {
  "lastUpdate": 1624890339156,
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
        "date": 1624890337692,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1268.3352355842487,
            "unit": "iter/sec",
            "range": "stddev: 0.000014888917612028702",
            "extra": "mean: 788.4350855705414 usec\nrounds: 596"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1821.2425562266994,
            "unit": "iter/sec",
            "range": "stddev: 0.00002233244283482722",
            "extra": "mean: 549.0756827425708 usec\nrounds: 1327"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13740.614275177284,
            "unit": "iter/sec",
            "range": "stddev: 0.000004320813503891442",
            "extra": "mean: 72.77695014017834 usec\nrounds: 1785"
          }
        ]
      }
    ]
  }
}