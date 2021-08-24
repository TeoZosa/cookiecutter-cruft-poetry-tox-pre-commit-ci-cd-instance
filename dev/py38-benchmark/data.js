window.BENCHMARK_DATA = {
  "lastUpdate": 1629812091283,
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
        "date": 1629812089394,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 287.383681515704,
            "unit": "iter/sec",
            "range": "stddev: 0.0002782088612934791",
            "extra": "mean: 3.4796686949163305 msec\nrounds: 118"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 835.0648997776224,
            "unit": "iter/sec",
            "range": "stddev: 0.0002273702477588419",
            "extra": "mean: 1.1975117146778649 msec\nrounds: 722"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1655.631472906533,
            "unit": "iter/sec",
            "range": "stddev: 0.0001756886590009635",
            "extra": "mean: 603.9991485813305 usec\nrounds: 774"
          }
        ]
      }
    ]
  }
}