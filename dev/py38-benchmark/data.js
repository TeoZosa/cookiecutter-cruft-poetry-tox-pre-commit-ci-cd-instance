window.BENCHMARK_DATA = {
  "lastUpdate": 1626118822939,
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
          "id": "bac7959f728fcc952b9e63ae994b38826ea890e8",
          "message": "Merge pull request #90 from TeoZosa/dependabot/github_actions/crazy-max/ghaction-github-labeler-3.1.1",
          "timestamp": "2021-07-12T19:33:44Z",
          "tree_id": "6a784932fae859fa12497b763a460938312fcacc"
        },
        "date": 1626118820595,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1093.2164342704446,
            "unit": "iter/sec",
            "range": "stddev: 0.00012279874943118342",
            "extra": "mean: 914.7319493667762 usec\nrounds: 474"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1428.1343546500232,
            "unit": "iter/sec",
            "range": "stddev: 0.00021618544766688054",
            "extra": "mean: 700.2142317660713 usec\nrounds: 1467"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 9320.410151305005,
            "unit": "iter/sec",
            "range": "stddev: 0.0000283008520104438",
            "extra": "mean: 107.2914156959052 usec\nrounds: 1975"
          }
        ]
      }
    ]
  }
}