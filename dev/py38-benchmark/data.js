window.BENCHMARK_DATA = {
  "lastUpdate": 1628520808992,
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
          "id": "dc8f646a9a657bf2459a1c7bdb7eb3c600746cb6",
          "message": "Merge pull request #276 from TeoZosa/dependabot/pip/hypothesis-6.14.6\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@3623d72",
          "timestamp": "2021-08-09T13:33:57Z",
          "tree_id": "8a464aae9b3dc1c2c8b8c8fcf255cdfea81a44a4"
        },
        "date": 1628520806575,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 340.63984369314915,
            "unit": "iter/sec",
            "range": "stddev: 0.000333729583394098",
            "extra": "mean: 2.93565188721965 msec\nrounds: 133"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 992.1953471880197,
            "unit": "iter/sec",
            "range": "stddev: 0.0001245991391312532",
            "extra": "mean: 1.007866044558765 msec\nrounds: 965"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2083.353284621585,
            "unit": "iter/sec",
            "range": "stddev: 0.00006158096938195279",
            "extra": "mean: 479.99540326720796 usec\nrounds: 796"
          }
        ]
      }
    ]
  }
}