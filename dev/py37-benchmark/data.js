window.BENCHMARK_DATA = {
  "lastUpdate": 1627047029226,
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
          "id": "8a852f763cf4a775fe37d39bc099d5e027f2a808",
          "message": "Merge pull request #126 from TeoZosa/dependabot/pip/icontract-hypothesis-1.1.7",
          "timestamp": "2021-07-23T13:23:50Z",
          "tree_id": "52520372e3355b347facbdbae026a8207854014c"
        },
        "date": 1627047027618,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1065.7577418043093,
            "unit": "iter/sec",
            "range": "stddev: 0.0000266947674155795",
            "extra": "mean: 938.2995410448696 usec\nrounds: 536"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1536.5521177364208,
            "unit": "iter/sec",
            "range": "stddev: 0.000025163385715294265",
            "extra": "mean: 650.8077327524398 usec\nrounds: 1377"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 11791.000164352992,
            "unit": "iter/sec",
            "range": "stddev: 0.000007398612051011753",
            "extra": "mean: 84.81044746511316 usec\nrounds: 1618"
          }
        ]
      }
    ]
  }
}