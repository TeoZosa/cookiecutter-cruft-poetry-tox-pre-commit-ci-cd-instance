window.BENCHMARK_DATA = {
  "lastUpdate": 1629812036856,
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
        "date": 1629812035104,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 394.78889902014515,
            "unit": "iter/sec",
            "range": "stddev: 0.00008091065949598607",
            "extra": "mean: 2.5329992876749365 msec\nrounds: 146"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1155.2189451718907,
            "unit": "iter/sec",
            "range": "stddev: 0.000015866685970531168",
            "extra": "mean: 865.6367731670165 usec\nrounds: 1036"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2399.20722426217,
            "unit": "iter/sec",
            "range": "stddev: 0.000010597609913162015",
            "extra": "mean: 416.8043468223262 usec\nrounds: 865"
          }
        ]
      }
    ]
  }
}