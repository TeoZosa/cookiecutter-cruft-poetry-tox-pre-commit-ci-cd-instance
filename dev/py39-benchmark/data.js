window.BENCHMARK_DATA = {
  "lastUpdate": 1629731630013,
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
        "date": 1629731628194,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 275.160846687714,
            "unit": "iter/sec",
            "range": "stddev: 0.0004372373304075932",
            "extra": "mean: 3.634237981303065 msec\nrounds: 107"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 782.3568488598867,
            "unit": "iter/sec",
            "range": "stddev: 0.0004856251494651364",
            "extra": "mean: 1.2781891044441938 msec\nrounds: 833"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1671.2360474494226,
            "unit": "iter/sec",
            "range": "stddev: 0.00010636736966670807",
            "extra": "mean: 598.3595205034994 usec\nrounds: 634"
          }
        ]
      }
    ]
  }
}