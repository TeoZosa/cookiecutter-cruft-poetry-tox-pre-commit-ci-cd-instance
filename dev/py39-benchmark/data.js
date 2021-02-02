window.BENCHMARK_DATA = {
  "lastUpdate": 1612275352380,
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
          "id": "e06321b7db5e0a5cf91a4a557c5492a83615983a",
          "message": "Merge pull request #58 from TeoZosa/dependabot/pip/dot-github/workflows/cruft-2.6.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@7f20b60",
          "timestamp": "2021-02-02T14:11:22Z",
          "tree_id": "d057d8e98bd3c7fa5f6ef999b9cad5904b18c4c1",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/e06321b7db5e0a5cf91a4a557c5492a83615983a"
        },
        "date": 1612275351279,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1087.736766979058,
            "unit": "iter/sec",
            "range": "stddev: 0.000027620557333884657",
            "extra": "mean: 919.3400741406149 usec\nrounds: 553"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1592.181147968453,
            "unit": "iter/sec",
            "range": "stddev: 0.000022280474760162163",
            "extra": "mean: 628.0692377723177 usec\nrounds: 1329"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13327.520770621331,
            "unit": "iter/sec",
            "range": "stddev: 0.0000066271338180973886",
            "extra": "mean: 75.03270992489173 usec\nrounds: 1572"
          }
        ]
      }
    ]
  }
}