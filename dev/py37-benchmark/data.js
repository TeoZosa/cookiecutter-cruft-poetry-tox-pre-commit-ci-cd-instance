window.BENCHMARK_DATA = {
  "lastUpdate": 1631628721700,
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
        "date": 1631628718318,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 248.80286038096858,
            "unit": "iter/sec",
            "range": "stddev: 0.0008428772803926183",
            "extra": "mean: 4.019246396399114 msec\nrounds: 111"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 695.7596287254428,
            "unit": "iter/sec",
            "range": "stddev: 0.0004993117467344045",
            "extra": "mean: 1.437277988997282 msec\nrounds: 636"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1509.1600530297537,
            "unit": "iter/sec",
            "range": "stddev: 0.0002255342534087566",
            "extra": "mean: 662.6202422946618 usec\nrounds: 714"
          }
        ]
      }
    ]
  }
}