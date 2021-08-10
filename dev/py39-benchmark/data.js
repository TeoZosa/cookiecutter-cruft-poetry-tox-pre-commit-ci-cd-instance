window.BENCHMARK_DATA = {
  "lastUpdate": 1628603385846,
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
          "id": "272b92e586ecdacb5b60d5b6735b93f263172600",
          "message": "Merge pull request #157 from TeoZosa/dependabot/github_actions/actions/setup-node-2.4.0",
          "timestamp": "2021-08-10T13:41:40Z",
          "tree_id": "f6d8f4abc45ac6332554f12135ff9110ea65c71c"
        },
        "date": 1628603383667,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 368.9090158436545,
            "unit": "iter/sec",
            "range": "stddev: 0.00004992378659406207",
            "extra": "mean: 2.710695475178641 msec\nrounds: 141"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1047.7568684217556,
            "unit": "iter/sec",
            "range": "stddev: 0.00002417993117090426",
            "extra": "mean: 954.4198946710869 usec\nrounds: 788"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2267.2177586922435,
            "unit": "iter/sec",
            "range": "stddev: 0.000011279909063811042",
            "extra": "mean: 441.06923393931567 usec\nrounds: 825"
          }
        ]
      }
    ]
  }
}