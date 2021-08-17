window.BENCHMARK_DATA = {
  "lastUpdate": 1629208801223,
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
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "ffc1e36c6499246f9fbca81f62e92589d37556c6",
          "message": "Merge pull request #166 from TeoZosa/dependabot/github_actions/actions/setup-node-2.4.0",
          "timestamp": "2021-08-17T13:24:20Z",
          "tree_id": "f2948ca734a7c50c1b95718df2a79591e7aa272b"
        },
        "date": 1629208798814,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 303.77615747619774,
            "unit": "iter/sec",
            "range": "stddev: 0.00033556124638181703",
            "extra": "mean: 3.2918975877109595 msec\nrounds: 114"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 860.3955119113836,
            "unit": "iter/sec",
            "range": "stddev: 0.0002899433689536489",
            "extra": "mean: 1.1622561788804344 msec\nrounds: 805"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1702.732794772795,
            "unit": "iter/sec",
            "range": "stddev: 0.000125010728136697",
            "extra": "mean: 587.2912080332814 usec\nrounds: 697"
          }
        ]
      }
    ]
  }
}