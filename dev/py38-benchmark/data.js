window.BENCHMARK_DATA = {
  "lastUpdate": 1631628646798,
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
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "fa7f5e421545bd90f78f6f10e36516b3a8f049e4",
          "message": "Merge pull request #222 from TeoZosa/dependabot/github_actions/codecov/codecov-action-2.1.0",
          "timestamp": "2021-09-14T13:27:42Z",
          "tree_id": "a2a916a94e02d76cd6209ba48a4da6ce4de87aa5"
        },
        "date": 1631628644272,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 367.1439351213909,
            "unit": "iter/sec",
            "range": "stddev: 0.00003131866815549669",
            "extra": "mean: 2.723727411347172 msec\nrounds: 141"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1068.7355055403518,
            "unit": "iter/sec",
            "range": "stddev: 0.000019210294432871412",
            "extra": "mean: 935.685204445791 usec\nrounds: 900"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2203.0474034900776,
            "unit": "iter/sec",
            "range": "stddev: 0.00002171308800066337",
            "extra": "mean: 453.9166966701649 usec\nrounds: 811"
          }
        ]
      }
    ]
  }
}