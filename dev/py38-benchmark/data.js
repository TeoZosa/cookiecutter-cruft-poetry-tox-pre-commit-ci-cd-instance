window.BENCHMARK_DATA = {
  "lastUpdate": 1626789306409,
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
        "date": 1626789303143,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1062.6831732847945,
            "unit": "iter/sec",
            "range": "stddev: 0.000019319981450641914",
            "extra": "mean: 941.014241252133 usec\nrounds: 543"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1561.5463145900092,
            "unit": "iter/sec",
            "range": "stddev: 0.000017443252816603927",
            "extra": "mean: 640.3908681136713 usec\nrounds: 1289"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 11153.036251011576,
            "unit": "iter/sec",
            "range": "stddev: 0.00004757545920000826",
            "extra": "mean: 89.6616829259656 usec\nrounds: 1640"
          }
        ]
      }
    ]
  }
}