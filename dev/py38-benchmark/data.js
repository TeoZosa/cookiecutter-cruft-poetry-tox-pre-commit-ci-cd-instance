window.BENCHMARK_DATA = {
  "lastUpdate": 1629732842036,
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
        "date": 1629732839020,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 279.1481174495652,
            "unit": "iter/sec",
            "range": "stddev: 0.0004200676211295051",
            "extra": "mean: 3.582327579840025 msec\nrounds: 119"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 822.0479966332618,
            "unit": "iter/sec",
            "range": "stddev: 0.00024090682475091179",
            "extra": "mean: 1.216473982170809 msec\nrounds: 729"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1629.345627027605,
            "unit": "iter/sec",
            "range": "stddev: 0.00018103153048720203",
            "extra": "mean: 613.7433233391295 usec\nrounds: 767"
          }
        ]
      }
    ]
  }
}