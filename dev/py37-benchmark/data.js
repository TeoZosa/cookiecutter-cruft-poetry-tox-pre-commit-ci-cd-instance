window.BENCHMARK_DATA = {
  "lastUpdate": 1624639929122,
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
          "id": "00103c1542333355db51e7652c7b48af2cda9c7f",
          "message": "Merge pull request #50 from TeoZosa/dependabot/github_actions/crazy-max/ghaction-github-labeler-3.1.1",
          "timestamp": "2021-06-25T16:44:56Z",
          "tree_id": "fcaca89ea364772e37ab1eb4761a68c342fe4d68"
        },
        "date": 1624639927439,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1069.5378725761127,
            "unit": "iter/sec",
            "range": "stddev: 0.00004334576965026482",
            "extra": "mean: 934.9832536470894 usec\nrounds: 548"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1535.9496435791652,
            "unit": "iter/sec",
            "range": "stddev: 0.000037329599954317815",
            "extra": "mean: 651.063011199858 usec\nrounds: 1250"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 11774.725728768119,
            "unit": "iter/sec",
            "range": "stddev: 0.000007534660789371613",
            "extra": "mean: 84.92766821368848 usec\nrounds: 1724"
          }
        ]
      }
    ]
  }
}