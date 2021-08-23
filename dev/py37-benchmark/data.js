window.BENCHMARK_DATA = {
  "lastUpdate": 1629731584739,
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
          "id": "f7a8de5ac4251588dbff28ad731059ae8e156b8d",
          "message": "Merge pull request #300 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/dot-github/workflows/tox-3.24.3\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@d8ee441",
          "timestamp": "2021-08-23T14:25:03Z",
          "tree_id": "c28dbcd49826b80f791038c9ce3ab54c3c5b7b17"
        },
        "date": 1629731581660,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 253.85982868951598,
            "unit": "iter/sec",
            "range": "stddev: 0.0009056958572891036",
            "extra": "mean: 3.9391817333299035 msec\nrounds: 105"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 776.6721965855138,
            "unit": "iter/sec",
            "range": "stddev: 0.0002401203433071407",
            "extra": "mean: 1.2875444806654632 msec\nrounds: 543"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1555.3729528801273,
            "unit": "iter/sec",
            "range": "stddev: 0.0001920753886703176",
            "extra": "mean: 642.9326150671916 usec\nrounds: 730"
          }
        ]
      }
    ]
  }
}