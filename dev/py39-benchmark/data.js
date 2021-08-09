window.BENCHMARK_DATA = {
  "lastUpdate": 1628522873205,
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
          "id": "c685869ba45c6d7c3834f34a83f8a5ef083f1881",
          "message": "Merge pull request #152 from TeoZosa/dependabot/github_actions/actions/setup-node-2.4.0",
          "timestamp": "2021-08-09T13:27:45Z",
          "tree_id": "b8f6c6c69ab356957685b141a4f702a02b25ef79"
        },
        "date": 1628522868003,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 358.0515849804822,
            "unit": "iter/sec",
            "range": "stddev: 0.00027424111724804747",
            "extra": "mean: 2.792893655405858 msec\nrounds: 148"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 981.4180783335041,
            "unit": "iter/sec",
            "range": "stddev: 0.00010837516088422283",
            "extra": "mean: 1.0189337470714304 msec\nrounds: 854"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2076.9303145947015,
            "unit": "iter/sec",
            "range": "stddev: 0.00006468658277873827",
            "extra": "mean: 481.4798036183236 usec\nrounds: 774"
          }
        ]
      }
    ]
  }
}