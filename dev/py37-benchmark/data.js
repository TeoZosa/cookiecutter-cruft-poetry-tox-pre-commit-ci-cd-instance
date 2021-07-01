window.BENCHMARK_DATA = {
  "lastUpdate": 1625146904140,
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
          "id": "4e10b96990238f5cc1f5f41f46e0d4036038c8db",
          "message": "Merge pull request #237 from TeoZosa/dependabot/pip/cruft-2.9.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@4c87803",
          "timestamp": "2021-07-01T13:34:35Z",
          "tree_id": "d1998ecd30bad9956612602239b85f02263fdfb2"
        },
        "date": 1625146901643,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 939.5972987389372,
            "unit": "iter/sec",
            "range": "stddev: 0.00011491110490190315",
            "extra": "mean: 1.0642857331988194 msec\nrounds: 491"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1236.038388154489,
            "unit": "iter/sec",
            "range": "stddev: 0.00020704759248781076",
            "extra": "mean: 809.0363613164843 usec\nrounds: 1215"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8264.114121970606,
            "unit": "iter/sec",
            "range": "stddev: 0.00009295156159909593",
            "extra": "mean: 121.00510535562965 usec\nrounds: 1718"
          }
        ]
      }
    ]
  }
}