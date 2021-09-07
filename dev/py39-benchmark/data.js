window.BENCHMARK_DATA = {
  "lastUpdate": 1631022175380,
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
        "date": 1631022172382,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 373.3940629204272,
            "unit": "iter/sec",
            "range": "stddev: 0.000025375107629673603",
            "extra": "mean: 2.678135780142564 msec\nrounds: 141"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1067.1760819254157,
            "unit": "iter/sec",
            "range": "stddev: 0.000012759050216702708",
            "extra": "mean: 937.0524854678007 usec\nrounds: 929"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2282.74708025271,
            "unit": "iter/sec",
            "range": "stddev: 0.00001537947947109237",
            "extra": "mean: 438.06867990355533 usec\nrounds: 831"
          }
        ]
      }
    ]
  }
}