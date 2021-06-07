window.BENCHMARK_DATA = {
  "lastUpdate": 1623103424996,
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
        "date": 1623103423323,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1225.9772286138493,
            "unit": "iter/sec",
            "range": "stddev: 0.000015166589790583295",
            "extra": "mean: 815.675835293164 usec\nrounds: 595"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1751.2733345464364,
            "unit": "iter/sec",
            "range": "stddev: 0.000017282600466630084",
            "extra": "mean: 571.0130910312699 usec\nrounds: 1483"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 15103.998212673472,
            "unit": "iter/sec",
            "range": "stddev: 0.000004474132061284249",
            "extra": "mean: 66.20763495330127 usec\nrounds: 1934"
          }
        ]
      }
    ]
  }
}