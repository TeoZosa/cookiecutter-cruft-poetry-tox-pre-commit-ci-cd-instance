window.BENCHMARK_DATA = {
  "lastUpdate": 1628257996140,
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
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "4c67cf166dec516a25f52a7e1e00d85d348980b1",
          "message": "Merge pull request #269 from TeoZosa/dependabot/github_actions/actions/setup-node-2.4.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@7b579be",
          "timestamp": "2021-08-06T13:36:20Z",
          "tree_id": "7aa816e2a9e658023b51dd9214cc4c8c415c373f"
        },
        "date": 1628257993346,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 955.9126301947318,
            "unit": "iter/sec",
            "range": "stddev: 0.00018405298992888797",
            "extra": "mean: 1.0461207106305175 msec\nrounds: 508"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1331.3303220523735,
            "unit": "iter/sec",
            "range": "stddev: 0.000197082515406489",
            "extra": "mean: 751.1283889774282 usec\nrounds: 1252"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8463.49514194983,
            "unit": "iter/sec",
            "range": "stddev: 0.000056635765987515234",
            "extra": "mean: 118.15449565788003 usec\nrounds: 1727"
          }
        ]
      }
    ]
  }
}