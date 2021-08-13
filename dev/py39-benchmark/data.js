window.BENCHMARK_DATA = {
  "lastUpdate": 1628865501127,
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
          "id": "169943541514c334086983c81f7f16c6301e82db",
          "message": "Merge pull request #159 from TeoZosa/dependabot/github_actions/crazy-max/ghaction-github-labeler-3.1.1",
          "timestamp": "2021-08-13T13:57:24Z",
          "tree_id": "5b68aff2a4903d69bc27ea12f7cc479963a1489c"
        },
        "date": 1628865499290,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 398.59886803595845,
            "unit": "iter/sec",
            "range": "stddev: 0.00030171477419551517",
            "extra": "mean: 2.50878785714411 msec\nrounds: 161"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1170.002867231533,
            "unit": "iter/sec",
            "range": "stddev: 0.0001188227930793726",
            "extra": "mean: 854.6987601544988 usec\nrounds: 1034"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2496.6860231498044,
            "unit": "iter/sec",
            "range": "stddev: 0.000051283994897084615",
            "extra": "mean: 400.53094010531845 usec\nrounds: 768"
          }
        ]
      }
    ]
  }
}