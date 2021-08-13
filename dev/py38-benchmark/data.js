window.BENCHMARK_DATA = {
  "lastUpdate": 1628865559226,
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
        "date": 1628865557454,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 364.9073514520276,
            "unit": "iter/sec",
            "range": "stddev: 0.00004653291165658782",
            "extra": "mean: 2.740421633109972 msec\nrounds: 139"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1064.6275947037666,
            "unit": "iter/sec",
            "range": "stddev: 0.000017847725017836485",
            "extra": "mean: 939.2955855876071 usec\nrounds: 888"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2206.197527403487,
            "unit": "iter/sec",
            "range": "stddev: 0.00001119340073591442",
            "extra": "mean: 453.26857073261147 usec\nrounds: 820"
          }
        ]
      }
    ]
  }
}