window.BENCHMARK_DATA = {
  "lastUpdate": 1622121973496,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action",
            "username": "actions-user"
          },
          "distinct": true,
          "id": "68274f94374b1f8572cf2f910507a2b0917cd3c3",
          "message": "Merge pull request #187 from TeoZosa/dependabot/pip/importlib-metadata-4.2.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@91fe094",
          "timestamp": "2021-05-27T13:18:47Z",
          "tree_id": "4ff7af7f821cd5b6c8e22a3664dbb88003bd8ba0",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/68274f94374b1f8572cf2f910507a2b0917cd3c3"
        },
        "date": 1622121971517,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 900.6835092233731,
            "unit": "iter/sec",
            "range": "stddev: 0.0002750905906224636",
            "extra": "mean: 1.110267912934549 msec\nrounds: 402"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1224.9891665010516,
            "unit": "iter/sec",
            "range": "stddev: 0.00029805681468166007",
            "extra": "mean: 816.3337500006712 usec\nrounds: 912"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8120.644390986841,
            "unit": "iter/sec",
            "range": "stddev: 0.00010849525707713808",
            "extra": "mean: 123.14293692134909 usec\nrounds: 1728"
          }
        ]
      }
    ]
  }
}