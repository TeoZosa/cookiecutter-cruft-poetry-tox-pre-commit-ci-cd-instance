window.BENCHMARK_DATA = {
  "lastUpdate": 1623103466316,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "2aa0e4fb5e7d92b9fc8e5e06b03dd71a12a5d220",
          "message": "Merge pull request #204 from TeoZosa/update-feature-documentation-formatting\n\n📝 Update Documentation Feature Taxonomy\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@965fb99",
          "timestamp": "2021-06-07T21:57:36Z",
          "tree_id": "1dca163ff3059df86acd9df70ce8e2a1086097ac"
        },
        "date": 1623103464346,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1062.6903790301628,
            "unit": "iter/sec",
            "range": "stddev: 0.00001996028986170554",
            "extra": "mean: 941.0078605516543 usec\nrounds: 545"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1577.3746819113878,
            "unit": "iter/sec",
            "range": "stddev: 0.00002533245784003833",
            "extra": "mean: 633.9647843137988 usec\nrounds: 1326"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 12686.345898137079,
            "unit": "iter/sec",
            "range": "stddev: 0.000004865287888906802",
            "extra": "mean: 78.8249041945833 usec\nrounds: 1764"
          }
        ]
      }
    ]
  }
}