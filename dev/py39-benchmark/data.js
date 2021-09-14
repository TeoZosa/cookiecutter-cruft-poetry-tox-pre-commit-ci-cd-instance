window.BENCHMARK_DATA = {
  "lastUpdate": 1631628613034,
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
        "date": 1631628610767,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 372.14297939783756,
            "unit": "iter/sec",
            "range": "stddev: 0.000026958922591895447",
            "extra": "mean: 2.687139232394211 msec\nrounds: 142"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1053.5047661469494,
            "unit": "iter/sec",
            "range": "stddev: 0.000023860674808290266",
            "extra": "mean: 949.2126017211713 usec\nrounds: 929"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2308.730889788615,
            "unit": "iter/sec",
            "range": "stddev: 0.0000160027695453808",
            "extra": "mean: 433.13839842614095 usec\nrounds: 763"
          }
        ]
      }
    ]
  }
}