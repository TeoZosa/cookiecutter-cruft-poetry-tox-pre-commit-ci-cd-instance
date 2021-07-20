window.BENCHMARK_DATA = {
  "lastUpdate": 1626789802827,
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
          "id": "153b44f362e95c03cceeb32073c22cc0a475ccee",
          "message": "Merge pull request #115 from TeoZosa/dependabot/github_actions/actions/setup-node-2.3.0",
          "timestamp": "2021-07-20T13:25:21Z",
          "tree_id": "19cc98f494b688eb40550775e3814e7950ce2429"
        },
        "date": 1626789801620,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1250.6812637985981,
            "unit": "iter/sec",
            "range": "stddev: 0.000015371107194155837",
            "extra": "mean: 799.5642286690829 usec\nrounds: 586"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1831.2085208526319,
            "unit": "iter/sec",
            "range": "stddev: 0.00001624332481184328",
            "extra": "mean: 546.0874546031428 usec\nrounds: 1531"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 14603.539519461268,
            "unit": "iter/sec",
            "range": "stddev: 0.000004603849191162177",
            "extra": "mean: 68.47654972052217 usec\nrounds: 1790"
          }
        ]
      }
    ]
  }
}