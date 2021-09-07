window.BENCHMARK_DATA = {
  "lastUpdate": 1631021564084,
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
          "id": "2bfcba14314da44dcd39ea7bf6897d7419f02299",
          "message": "Merge pull request #208 from TeoZosa/dependabot/github_actions/codecov/codecov-action-2.0.3",
          "timestamp": "2021-09-07T13:23:08Z",
          "tree_id": "bcf6f1702db04a2c494a1bb54323418b3e5c69f0"
        },
        "date": 1631021561396,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 262.6144395399846,
            "unit": "iter/sec",
            "range": "stddev: 0.00046315261677437613",
            "extra": "mean: 3.8078637326708926 msec\nrounds: 101"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 781.1708717964938,
            "unit": "iter/sec",
            "range": "stddev: 0.00012826015525776614",
            "extra": "mean: 1.280129656780795 msec\nrounds: 708"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1517.7075916559263,
            "unit": "iter/sec",
            "range": "stddev: 0.00022110262403580923",
            "extra": "mean: 658.8884482741036 usec\nrounds: 696"
          }
        ]
      }
    ]
  }
}