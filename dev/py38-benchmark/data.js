window.BENCHMARK_DATA = {
  "lastUpdate": 1626119686518,
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
          "id": "41dfd547f3d16b1f7222468901b174db97125612",
          "message": "Merge pull request #91 from TeoZosa/dependabot/github_actions/actions/setup-node-2.2.0",
          "timestamp": "2021-07-12T19:46:44Z",
          "tree_id": "236df4809c03a0b143fd0919be1d09ba1c466389"
        },
        "date": 1626119684552,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1090.4915447843994,
            "unit": "iter/sec",
            "range": "stddev: 0.000022091904852500306",
            "extra": "mean: 917.0176557377248 usec\nrounds: 549"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1600.5381667581853,
            "unit": "iter/sec",
            "range": "stddev: 0.00001860929166249183",
            "extra": "mean: 624.789849295161 usec\nrounds: 1274"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 11857.166122728215,
            "unit": "iter/sec",
            "range": "stddev: 0.00000528282132125222",
            "extra": "mean: 84.33718391472699 usec\nrounds: 1691"
          }
        ]
      }
    ]
  }
}