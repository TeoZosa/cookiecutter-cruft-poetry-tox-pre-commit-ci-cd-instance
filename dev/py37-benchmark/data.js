window.BENCHMARK_DATA = {
  "lastUpdate": 1626356834837,
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
          "id": "87d22c25105b76081d8a9b6375ff6078e4135775",
          "message": "Merge pull request #246 from TeoZosa/dependabot/pip/sphinx-4.1.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@aaa8297",
          "timestamp": "2021-07-15T13:25:05Z",
          "tree_id": "159775871215a2ac15b3a5c98f84b1a27c5a910c"
        },
        "date": 1626356832482,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1399.073810956279,
            "unit": "iter/sec",
            "range": "stddev: 0.00001480492176814818",
            "extra": "mean: 714.7585725419958 usec\nrounds: 641"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 2015.5965168146631,
            "unit": "iter/sec",
            "range": "stddev: 0.000015790774063206117",
            "extra": "mean: 496.13104193112247 usec\nrounds: 1574"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 15424.286273246144,
            "unit": "iter/sec",
            "range": "stddev: 0.000004132009432066062",
            "extra": "mean: 64.83282158309834 usec\nrounds: 1844"
          }
        ]
      }
    ]
  }
}