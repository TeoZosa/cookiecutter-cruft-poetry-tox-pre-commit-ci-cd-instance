window.BENCHMARK_DATA = {
  "lastUpdate": 1628603406346,
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
        "date": 1628603401039,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 283.76388055309974,
            "unit": "iter/sec",
            "range": "stddev: 0.00030889982720775814",
            "extra": "mean: 3.5240566842081704 msec\nrounds: 114"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 808.9722070106843,
            "unit": "iter/sec",
            "range": "stddev: 0.0002421651440250629",
            "extra": "mean: 1.2361364102917727 msec\nrounds: 680"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1649.0150762067274,
            "unit": "iter/sec",
            "range": "stddev: 0.00007709724574543359",
            "extra": "mean: 606.4225939645902 usec\nrounds: 729"
          }
        ]
      }
    ]
  }
}