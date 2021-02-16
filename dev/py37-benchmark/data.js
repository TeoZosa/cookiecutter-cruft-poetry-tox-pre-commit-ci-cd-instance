window.BENCHMARK_DATA = {
  "lastUpdate": 1613485022684,
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
          "id": "4e14dd2b8f615788923c8ab3e09baa214dd9583d",
          "message": "Merge pull request #73 from TeoZosa/dependabot/pip/pylint-2.6.2\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@04d81dc",
          "timestamp": "2021-02-16T14:12:15Z",
          "tree_id": "5a5b879844344e53da98379ceb0bdfcf4fe71cc7",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/4e14dd2b8f615788923c8ab3e09baa214dd9583d"
        },
        "date": 1613485021413,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1058.847801883592,
            "unit": "iter/sec",
            "range": "stddev: 0.00009483685845955816",
            "extra": "mean: 944.4227944951983 usec\nrounds: 545"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1518.8133115277471,
            "unit": "iter/sec",
            "range": "stddev: 0.00005014745092613837",
            "extra": "mean: 658.4087671671233 usec\nrounds: 1267"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 12056.142336631097,
            "unit": "iter/sec",
            "range": "stddev: 0.000015326693762277703",
            "extra": "mean: 82.9452715535403 usec\nrounds: 1705"
          }
        ]
      }
    ]
  }
}