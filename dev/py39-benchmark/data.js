window.BENCHMARK_DATA = {
  "lastUpdate": 1629730031855,
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
          "id": "a1db845bb99cbcd6216140a45f4a32317ca94e56",
          "message": "Merge pull request #181 from TeoZosa/dependabot/github_actions/crazy-max/ghaction-github-labeler-3.1.1",
          "timestamp": "2021-08-23T13:27:52Z",
          "tree_id": "2934b1d95729572e71882a9c18be4a1f6f4047e6"
        },
        "date": 1629730029494,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 300.2944638810896,
            "unit": "iter/sec",
            "range": "stddev: 0.0002528986986493407",
            "extra": "mean: 3.3300647207268512 msec\nrounds: 111"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 826.7707865538135,
            "unit": "iter/sec",
            "range": "stddev: 0.00019083504041681745",
            "extra": "mean: 1.2095250778855515 msec\nrounds: 719"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1796.9943710529276,
            "unit": "iter/sec",
            "range": "stddev: 0.00008377685496308914",
            "extra": "mean: 556.4847704080796 usec\nrounds: 784"
          }
        ]
      }
    ]
  }
}