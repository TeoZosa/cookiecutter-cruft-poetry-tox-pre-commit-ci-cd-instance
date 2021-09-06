window.BENCHMARK_DATA = {
  "lastUpdate": 1630935891229,
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
        "date": 1630935888987,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 317.37752707139043,
            "unit": "iter/sec",
            "range": "stddev: 0.0003218943183667539",
            "extra": "mean: 3.150821701925548 msec\nrounds: 104"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 934.1231754002032,
            "unit": "iter/sec",
            "range": "stddev: 0.00015238260106943758",
            "extra": "mean: 1.0705226316342846 msec\nrounds: 942"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1876.831434417481,
            "unit": "iter/sec",
            "range": "stddev: 0.00010628156885422773",
            "extra": "mean: 532.8129003286721 usec\nrounds: 913"
          }
        ]
      }
    ]
  }
}