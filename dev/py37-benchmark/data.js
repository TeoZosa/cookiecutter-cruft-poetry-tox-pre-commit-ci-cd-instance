window.BENCHMARK_DATA = {
  "lastUpdate": 1628257470386,
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
          "id": "7b670d96c237ab725d4c34e82cd2834378e8e89c",
          "message": "Merge pull request #150 from TeoZosa/dependabot/github_actions/actions/setup-node-2.4.0",
          "timestamp": "2021-08-06T13:16:20Z",
          "tree_id": "3b7f6e9967e0369726e6823d3c8afe77637ae549"
        },
        "date": 1628257467663,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 885.2138363941364,
            "unit": "iter/sec",
            "range": "stddev: 0.0003351483004218741",
            "extra": "mean: 1.1296705483879894 msec\nrounds: 403"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1184.0107201201133,
            "unit": "iter/sec",
            "range": "stddev: 0.00037358994410228384",
            "extra": "mean: 844.5869475730372 usec\nrounds: 1030"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 7935.002010212786,
            "unit": "iter/sec",
            "range": "stddev: 0.00007147242489502035",
            "extra": "mean: 126.02391262320347 usec\nrounds: 1442"
          }
        ]
      }
    ]
  }
}