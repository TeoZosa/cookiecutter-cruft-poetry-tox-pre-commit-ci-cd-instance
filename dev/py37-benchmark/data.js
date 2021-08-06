window.BENCHMARK_DATA = {
  "lastUpdate": 1628258005533,
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
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "4c67cf166dec516a25f52a7e1e00d85d348980b1",
          "message": "Merge pull request #269 from TeoZosa/dependabot/github_actions/actions/setup-node-2.4.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@7b579be",
          "timestamp": "2021-08-06T13:36:20Z",
          "tree_id": "7aa816e2a9e658023b51dd9214cc4c8c415c373f"
        },
        "date": 1628258003203,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1089.8986157440931,
            "unit": "iter/sec",
            "range": "stddev: 0.00003980189326153735",
            "extra": "mean: 917.5165336982121 usec\nrounds: 549"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1540.997367945937,
            "unit": "iter/sec",
            "range": "stddev: 0.000030120933944037192",
            "extra": "mean: 648.9303750939847 usec\nrounds: 1325"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 11954.039777583335,
            "unit": "iter/sec",
            "range": "stddev: 0.0000070488073817675225",
            "extra": "mean: 83.65372866461742 usec\nrounds: 1699"
          }
        ]
      }
    ]
  }
}