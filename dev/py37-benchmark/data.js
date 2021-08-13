window.BENCHMARK_DATA = {
  "lastUpdate": 1628865547882,
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
        "date": 1628865545117,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 275.35657177425384,
            "unit": "iter/sec",
            "range": "stddev: 0.00032668792037846673",
            "extra": "mean: 3.6316547433624793 msec\nrounds: 113"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 805.9492726570685,
            "unit": "iter/sec",
            "range": "stddev: 0.00012174645116020943",
            "extra": "mean: 1.2407728797907855 msec\nrounds: 757"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1555.8984384348944,
            "unit": "iter/sec",
            "range": "stddev: 0.00033647196228535017",
            "extra": "mean: 642.7154724866988 usec\nrounds: 745"
          }
        ]
      }
    ]
  }
}