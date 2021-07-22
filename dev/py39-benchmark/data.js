window.BENCHMARK_DATA = {
  "lastUpdate": 1626961265077,
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
          "id": "1adfaba3a5d15108da9c4edc154e849563047d5a",
          "message": "Merge pull request #123 from TeoZosa/dependabot/github_actions/actions/setup-node-2.3.0",
          "timestamp": "2021-07-22T13:30:29Z",
          "tree_id": "dbb705d7e41784d6f6a7ff93527bc2b2746923fd"
        },
        "date": 1626961261775,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 878.4366089371789,
            "unit": "iter/sec",
            "range": "stddev: 0.00017956826006658628",
            "extra": "mean: 1.1383860711473544 msec\nrounds: 506"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1260.7314198865326,
            "unit": "iter/sec",
            "range": "stddev: 0.00009089577289688089",
            "extra": "mean: 793.190353017458 usec\nrounds: 779"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8801.888490222185,
            "unit": "iter/sec",
            "range": "stddev: 0.00002046813456138814",
            "extra": "mean: 113.61198237297336 usec\nrounds: 1702"
          }
        ]
      }
    ]
  }
}