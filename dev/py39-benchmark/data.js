window.BENCHMARK_DATA = {
  "lastUpdate": 1629812122065,
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
          "id": "1d5057fb580d94668edbea325a1cc15bb0a84ead",
          "message": "Merge pull request #184 from TeoZosa/dependabot/github_actions/crazy-max/ghaction-github-labeler-3.1.1",
          "timestamp": "2021-08-24T13:23:19Z",
          "tree_id": "13f44ea6a969e8893910866d3877cc65db83f655"
        },
        "date": 1629812119894,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 295.0862495917005,
            "unit": "iter/sec",
            "range": "stddev: 0.00026032156538156377",
            "extra": "mean: 3.3888397083349746 msec\nrounds: 120"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 841.4555130030443,
            "unit": "iter/sec",
            "range": "stddev: 0.00011827629454677394",
            "extra": "mean: 1.1884169567457359 msec\nrounds: 786"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1767.6430072632595,
            "unit": "iter/sec",
            "range": "stddev: 0.00006470160792513515",
            "extra": "mean: 565.7250903553443 usec\nrounds: 653"
          }
        ]
      }
    ]
  }
}