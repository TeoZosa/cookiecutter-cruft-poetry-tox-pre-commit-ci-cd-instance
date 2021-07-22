window.BENCHMARK_DATA = {
  "lastUpdate": 1626961155713,
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
        "date": 1626961154307,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1274.74703490422,
            "unit": "iter/sec",
            "range": "stddev: 0.000015929969507975027",
            "extra": "mean: 784.469367347959 usec\nrounds: 588"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1868.5419725645706,
            "unit": "iter/sec",
            "range": "stddev: 0.000016394997598453063",
            "extra": "mean: 535.1766321992231 usec\nrounds: 1441"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13663.740548855512,
            "unit": "iter/sec",
            "range": "stddev: 0.000004451521479388926",
            "extra": "mean: 73.18640136823741 usec\nrounds: 1754"
          }
        ]
      }
    ]
  }
}