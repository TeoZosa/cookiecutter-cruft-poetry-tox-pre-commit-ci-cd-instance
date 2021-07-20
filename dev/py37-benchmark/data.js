window.BENCHMARK_DATA = {
  "lastUpdate": 1626789248839,
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
          "id": "afe8c417a22862caf210cfdf766efdde900a9035",
          "message": "Merge pull request #114 from TeoZosa/dependabot/github_actions/crazy-max/ghaction-github-labeler-3.1.1",
          "timestamp": "2021-07-20T13:13:09Z",
          "tree_id": "97f57118aed63f36bffa9fb879589e1855eeb45b"
        },
        "date": 1626789247092,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1221.6804663365606,
            "unit": "iter/sec",
            "range": "stddev: 0.00001569718290074606",
            "extra": "mean: 818.5446420361362 usec\nrounds: 609"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1764.5445363169786,
            "unit": "iter/sec",
            "range": "stddev: 0.000016589048919752973",
            "extra": "mean: 566.7184814089399 usec\nrounds: 1506"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13508.438721753757,
            "unit": "iter/sec",
            "range": "stddev: 0.000004578788854336625",
            "extra": "mean: 74.02779999953786 usec\nrounds: 1815"
          }
        ]
      }
    ]
  }
}