window.BENCHMARK_DATA = {
  "lastUpdate": 1626118815563,
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
        "date": 1626118813656,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1080.103805811237,
            "unit": "iter/sec",
            "range": "stddev: 0.000033266618469113064",
            "extra": "mean: 925.8369377274131 usec\nrounds: 546"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1515.284694708706,
            "unit": "iter/sec",
            "range": "stddev: 0.000024922970226578528",
            "extra": "mean: 659.941992083697 usec\nrounds: 1263"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 11692.96347781387,
            "unit": "iter/sec",
            "range": "stddev: 0.000006535845070460551",
            "extra": "mean: 85.52151915101689 usec\nrounds: 1645"
          }
        ]
      }
    ]
  }
}