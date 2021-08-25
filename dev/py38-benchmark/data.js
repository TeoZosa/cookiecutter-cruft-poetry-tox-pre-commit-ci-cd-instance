window.BENCHMARK_DATA = {
  "lastUpdate": 1629899173855,
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
          "id": "c91b854bab2e9ee946aa4e87959664855f794686",
          "message": "Merge pull request #186 from TeoZosa/dependabot/github_actions/codecov/codecov-action-2.0.3",
          "timestamp": "2021-08-25T13:27:22Z",
          "tree_id": "4c08a94b0d6d5228fc8e4a990af28f13934b3dfc"
        },
        "date": 1629899171882,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 296.2231911598334,
            "unit": "iter/sec",
            "range": "stddev: 0.0006469992657157489",
            "extra": "mean: 3.375832918700917 msec\nrounds: 123"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 853.3175649662163,
            "unit": "iter/sec",
            "range": "stddev: 0.00017189918449407162",
            "extra": "mean: 1.1718966549570453 msec\nrounds: 797"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1610.1850243328981,
            "unit": "iter/sec",
            "range": "stddev: 0.00022181917604108885",
            "extra": "mean: 621.0466405339358 usec\nrounds: 676"
          }
        ]
      }
    ]
  }
}