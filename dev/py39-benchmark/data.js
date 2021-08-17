window.BENCHMARK_DATA = {
  "lastUpdate": 1629209203802,
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
          "id": "f26d8aad84b3caefb444b820161507f426c17bd2",
          "message": "Merge pull request #167 from TeoZosa/dependabot/github_actions/crazy-max/ghaction-github-labeler-3.1.1",
          "timestamp": "2021-08-17T13:35:48Z",
          "tree_id": "d47a86a7cdf0dda860c9ad6e86903d00eab534bc"
        },
        "date": 1629209201440,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 318.21530504710057,
            "unit": "iter/sec",
            "range": "stddev: 0.00003665044397517968",
            "extra": "mean: 3.142526409444653 msec\nrounds: 127"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 903.4864768704954,
            "unit": "iter/sec",
            "range": "stddev: 0.000024613438180408864",
            "extra": "mean: 1.1068234285739496 msec\nrounds: 805"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1943.8888772353039,
            "unit": "iter/sec",
            "range": "stddev: 0.000012999523857856647",
            "extra": "mean: 514.4326981397467 usec\nrounds: 752"
          }
        ]
      }
    ]
  }
}