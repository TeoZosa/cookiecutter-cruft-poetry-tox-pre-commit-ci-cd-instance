window.BENCHMARK_DATA = {
  "lastUpdate": 1627394597297,
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
        "date": 1627394594277,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 921.0643995097529,
            "unit": "iter/sec",
            "range": "stddev: 0.00016300381402361923",
            "extra": "mean: 1.0857004141428779 msec\nrounds: 495"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1313.4369462803045,
            "unit": "iter/sec",
            "range": "stddev: 0.0000874990927985842",
            "extra": "mean: 761.3612536422338 usec\nrounds: 1167"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8311.933518285807,
            "unit": "iter/sec",
            "range": "stddev: 0.0000644978817200468",
            "extra": "mean: 120.30895071526425 usec\nrounds: 1745"
          }
        ]
      }
    ]
  }
}