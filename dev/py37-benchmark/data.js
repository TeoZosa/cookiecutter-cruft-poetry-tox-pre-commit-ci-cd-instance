window.BENCHMARK_DATA = {
  "lastUpdate": 1624890326041,
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
        "date": 1624890323856,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1331.7616596466096,
            "unit": "iter/sec",
            "range": "stddev: 0.00009647492249837463",
            "extra": "mean: 750.8851097765913 usec\nrounds: 583"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1954.8341347946907,
            "unit": "iter/sec",
            "range": "stddev: 0.00006863392353908586",
            "extra": "mean: 511.5523522945983 usec\nrounds: 1547"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 15324.277606870477,
            "unit": "iter/sec",
            "range": "stddev: 0.000010962916834855312",
            "extra": "mean: 65.25593086043159 usec\nrounds: 2184"
          }
        ]
      }
    ]
  }
}