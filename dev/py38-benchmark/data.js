window.BENCHMARK_DATA = {
  "lastUpdate": 1630935844299,
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
          "id": "6833386f9f7f2e7e481f4c65ec973e96901ad0b8",
          "message": "Merge pull request #206 from TeoZosa/dependabot/github_actions/codecov/codecov-action-2.0.3",
          "timestamp": "2021-09-06T13:24:17Z",
          "tree_id": "b86b8181f4e1e92dd195f7a47efb53b7bf3066d0"
        },
        "date": 1630935841795,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 367.6421311831549,
            "unit": "iter/sec",
            "range": "stddev: 0.000026100714015892128",
            "extra": "mean: 2.7200364571431885 msec\nrounds: 140"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1070.742703101276,
            "unit": "iter/sec",
            "range": "stddev: 0.000013761574126026125",
            "extra": "mean: 933.9311835641014 usec\nrounds: 937"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2218.597529234568,
            "unit": "iter/sec",
            "range": "stddev: 0.000009936564390402463",
            "extra": "mean: 450.73519952264945 usec\nrounds: 837"
          }
        ]
      }
    ]
  }
}