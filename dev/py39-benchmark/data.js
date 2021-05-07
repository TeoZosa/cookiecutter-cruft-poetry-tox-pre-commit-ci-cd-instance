window.BENCHMARK_DATA = {
  "lastUpdate": 1620408484683,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action",
            "username": "actions-user"
          },
          "distinct": true,
          "id": "4c9d8ba5244dc94fec2186d1bb1ac3f857e913d4",
          "message": ":recycle: `pyupgrade` auto-fix for `subprocess.run()`\n\nsee: https://docs.python.org/3/library/subprocess.html\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@098e42e",
          "timestamp": "2021-05-07T17:24:16Z",
          "tree_id": "0b54f295bcbc5e47eeb5c233a3a7e58b67013764",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/4c9d8ba5244dc94fec2186d1bb1ac3f857e913d4"
        },
        "date": 1620408483402,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1083.3904967595215,
            "unit": "iter/sec",
            "range": "stddev: 0.00002740874996118762",
            "extra": "mean: 923.0282183488346 usec\nrounds: 545"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1582.8851434160583,
            "unit": "iter/sec",
            "range": "stddev: 0.000022831623437231817",
            "extra": "mean: 631.7577773469266 usec\nrounds: 1289"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 12985.514574958435,
            "unit": "iter/sec",
            "range": "stddev: 0.000007930629827296938",
            "extra": "mean: 77.00888511021527 usec\nrounds: 1558"
          }
        ]
      }
    ]
  }
}