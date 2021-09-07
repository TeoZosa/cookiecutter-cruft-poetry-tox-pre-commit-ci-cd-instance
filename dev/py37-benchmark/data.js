window.BENCHMARK_DATA = {
  "lastUpdate": 1631022237161,
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
        "date": 1631022234793,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 302.8794528843685,
            "unit": "iter/sec",
            "range": "stddev: 0.00013042420125081793",
            "extra": "mean: 3.301643576270504 msec\nrounds: 118"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 883.5316356439307,
            "unit": "iter/sec",
            "range": "stddev: 0.00008306009203155177",
            "extra": "mean: 1.1318213855140402 msec\nrounds: 856"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1883.4527879184216,
            "unit": "iter/sec",
            "range": "stddev: 0.000026531038109627654",
            "extra": "mean: 530.9397752970451 usec\nrounds: 761"
          }
        ]
      }
    ]
  }
}