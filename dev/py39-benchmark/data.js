window.BENCHMARK_DATA = {
  "lastUpdate": 1629732773424,
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
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "2f6b12391c521bbd6465d3b7ce505fc4b3b1255c",
          "message": "Merge pull request #298 from TeoZosa/dependabot/pip/hypothesis-6.15.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@819e0d9",
          "timestamp": "2021-08-23T14:50:14Z",
          "tree_id": "46fdc8d6daa49f6887418293362bf1f2fee06afb"
        },
        "date": 1629732771021,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 316.99028170887794,
            "unit": "iter/sec",
            "range": "stddev: 0.0002047419630233757",
            "extra": "mean: 3.154670845456373 msec\nrounds: 110"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 882.7849791019069,
            "unit": "iter/sec",
            "range": "stddev: 0.00011482348184505806",
            "extra": "mean: 1.1327786762041883 msec\nrounds: 874"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1849.2701665450834,
            "unit": "iter/sec",
            "range": "stddev: 0.0000731190743557049",
            "extra": "mean: 540.7538704137856 usec\nrounds: 872"
          }
        ]
      }
    ]
  }
}