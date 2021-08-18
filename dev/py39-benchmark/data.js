window.BENCHMARK_DATA = {
  "lastUpdate": 1629293749187,
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
        "date": 1629293746693,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 255.92975060372956,
            "unit": "iter/sec",
            "range": "stddev: 0.0004948608409553109",
            "extra": "mean: 3.90732221494779 msec\nrounds: 107"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 759.3605068135955,
            "unit": "iter/sec",
            "range": "stddev: 0.0003139838759902783",
            "extra": "mean: 1.3168975618657972 msec\nrounds: 493"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1658.498930734899,
            "unit": "iter/sec",
            "range": "stddev: 0.00012893130596691184",
            "extra": "mean: 602.9548656729547 usec\nrounds: 670"
          }
        ]
      }
    ]
  }
}