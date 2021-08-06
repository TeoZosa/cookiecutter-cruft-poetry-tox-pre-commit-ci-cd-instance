window.BENCHMARK_DATA = {
  "lastUpdate": 1628257980407,
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
          "id": "76d92c34169e7abff00471cb55c51d76fa910c87",
          "message": "Merge pull request #151 from TeoZosa/dependabot/pip/dot-github/workflows/pip-21.2.3",
          "timestamp": "2021-08-06T13:32:32Z",
          "tree_id": "091f06ad162613cbb38bb73756293a13a060c08a"
        },
        "date": 1628257978604,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1382.604668296195,
            "unit": "iter/sec",
            "range": "stddev: 0.000015432286467434064",
            "extra": "mean: 723.2725470486913 usec\nrounds: 627"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 2005.9280223779372,
            "unit": "iter/sec",
            "range": "stddev: 0.00001628927554494843",
            "extra": "mean: 498.522374105201 usec\nrounds: 1676"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 15143.969629177189,
            "unit": "iter/sec",
            "range": "stddev: 0.000004682910126541404",
            "extra": "mean: 66.03288467201797 usec\nrounds: 2029"
          }
        ]
      }
    ]
  }
}