window.BENCHMARK_DATA = {
  "lastUpdate": 1627394528329,
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
          "id": "7aafc05e62abf5a7a0fff796845c3b1106da8e11",
          "message": "Merge pull request #130 from TeoZosa/dependabot/github_actions/crazy-max/ghaction-github-labeler-3.1.1",
          "timestamp": "2021-07-27T13:13:12Z",
          "tree_id": "5c2d6f0150478011f895cecaddad2004d73c0665"
        },
        "date": 1627394525455,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 949.8005227359968,
            "unit": "iter/sec",
            "range": "stddev: 0.00019885335945927403",
            "extra": "mean: 1.0528526528069266 msec\nrounds: 481"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1353.7188459474783,
            "unit": "iter/sec",
            "range": "stddev: 0.00021017507265871485",
            "extra": "mean: 738.7058272798826 usec\nrounds: 1349"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8742.714805089874,
            "unit": "iter/sec",
            "range": "stddev: 0.000060128279653600825",
            "extra": "mean: 114.38094714216408 usec\nrounds: 1627"
          }
        ]
      }
    ]
  }
}