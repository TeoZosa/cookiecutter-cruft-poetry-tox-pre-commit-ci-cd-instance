window.BENCHMARK_DATA = {
  "lastUpdate": 1631022188346,
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
          "id": "04cb74f146275bbb8495f661557bdfb536b6ad12",
          "message": "Merge pull request #209 from TeoZosa/dependabot/github_actions/crazy-max/ghaction-github-labeler-3.1.1",
          "timestamp": "2021-09-07T13:34:55Z",
          "tree_id": "3b5dd0dc705326890e11d3bb9dc283d0272c4b35"
        },
        "date": 1631022186032,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 292.6668527667673,
            "unit": "iter/sec",
            "range": "stddev: 0.000672324534981588",
            "extra": "mean: 3.4168543193271095 msec\nrounds: 119"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 837.8115778644608,
            "unit": "iter/sec",
            "range": "stddev: 0.00021717503788777252",
            "extra": "mean: 1.19358579711795 msec\nrounds: 833"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1654.295609799228,
            "unit": "iter/sec",
            "range": "stddev: 0.00023204240592663412",
            "extra": "mean: 604.4868849778087 usec\nrounds: 739"
          }
        ]
      }
    ]
  }
}