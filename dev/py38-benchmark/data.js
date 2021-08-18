window.BENCHMARK_DATA = {
  "lastUpdate": 1629293511315,
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
        "date": 1629293508867,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 277.9568229270564,
            "unit": "iter/sec",
            "range": "stddev: 0.0006897366853979379",
            "extra": "mean: 3.597681069561037 msec\nrounds: 115"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 812.2763111055663,
            "unit": "iter/sec",
            "range": "stddev: 0.00021526648190377053",
            "extra": "mean: 1.231108166430372 msec\nrounds: 703"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1624.6421600922902,
            "unit": "iter/sec",
            "range": "stddev: 0.00010631289126822451",
            "extra": "mean: 615.5201585702993 usec\nrounds: 700"
          }
        ]
      }
    ]
  }
}