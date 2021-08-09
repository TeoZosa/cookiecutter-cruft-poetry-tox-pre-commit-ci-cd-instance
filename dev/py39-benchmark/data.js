window.BENCHMARK_DATA = {
  "lastUpdate": 1628531788892,
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
          "id": "47cb419b3856502fda369af9a19262954e31177c",
          "message": "Merge pull request #144 from TeoZosa/dependabot/github_actions/crazy-max/ghaction-github-labeler-3.1.1",
          "timestamp": "2021-08-09T17:49:24Z",
          "tree_id": "1afc56692ca4b292e77faf963a8f8785ddad1cd8"
        },
        "date": 1628531786930,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 385.0951149386686,
            "unit": "iter/sec",
            "range": "stddev: 0.00026424839234585277",
            "extra": "mean: 2.5967610629370435 msec\nrounds: 143"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1135.4576362850873,
            "unit": "iter/sec",
            "range": "stddev: 0.00011329123405094981",
            "extra": "mean: 880.7021662840119 usec\nrounds: 872"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2475.7606616898374,
            "unit": "iter/sec",
            "range": "stddev: 0.000056080921521787675",
            "extra": "mean: 403.9162652004686 usec\nrounds: 773"
          }
        ]
      }
    ]
  }
}