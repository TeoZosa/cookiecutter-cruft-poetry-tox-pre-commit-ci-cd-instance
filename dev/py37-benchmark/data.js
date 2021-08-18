window.BENCHMARK_DATA = {
  "lastUpdate": 1629293390110,
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
          "id": "9b85d280cdd1aa8e623153bf71c46d20b64240ec",
          "message": "Merge pull request #170 from TeoZosa/dependabot/github_actions/crazy-max/ghaction-github-labeler-3.1.1",
          "timestamp": "2021-08-18T13:21:36Z",
          "tree_id": "4248c9d7e9184563eef4c7b2ecec5440d4f3172f"
        },
        "date": 1629293388413,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 355.18679454942503,
            "unit": "iter/sec",
            "range": "stddev: 0.00003064578377880333",
            "extra": "mean: 2.8154199856122406 msec\nrounds: 139"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1035.4811672442545,
            "unit": "iter/sec",
            "range": "stddev: 0.000015144632225399668",
            "extra": "mean: 965.7346088305196 usec\nrounds: 951"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2141.542096078447,
            "unit": "iter/sec",
            "range": "stddev: 0.000010931417507590965",
            "extra": "mean: 466.95323049272855 usec\nrounds: 833"
          }
        ]
      }
    ]
  }
}