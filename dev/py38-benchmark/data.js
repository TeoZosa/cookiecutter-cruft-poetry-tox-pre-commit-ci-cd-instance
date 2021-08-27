window.BENCHMARK_DATA = {
  "lastUpdate": 1630077617288,
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
          "id": "9e33a8c25ff70c2a8c88cbb8eeedf5aee458403b",
          "message": "Merge pull request #304 from TeoZosa/dependabot/pip/importlib-metadata-4.7.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@ef2ec6f",
          "timestamp": "2021-08-27T14:18:30Z",
          "tree_id": "7a7b277feba47a81384faeb8dd09a2d4cce8b854"
        },
        "date": 1630077615599,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 413.1901029056886,
            "unit": "iter/sec",
            "range": "stddev: 0.000032965855746108584",
            "extra": "mean: 2.4201934968133827 msec\nrounds: 157"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1205.6847770802324,
            "unit": "iter/sec",
            "range": "stddev: 0.00004164323017646077",
            "extra": "mean: 829.4041850819975 usec\nrounds: 1086"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2490.815734029218,
            "unit": "iter/sec",
            "range": "stddev: 0.00001236456460749588",
            "extra": "mean: 401.4749009082138 usec\nrounds: 878"
          }
        ]
      }
    ]
  }
}