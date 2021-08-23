window.BENCHMARK_DATA = {
  "lastUpdate": 1629729941492,
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
        "date": 1629729939382,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 321.27117100751923,
            "unit": "iter/sec",
            "range": "stddev: 0.0005087020451456485",
            "extra": "mean: 3.1126353381287215 msec\nrounds: 139"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 968.1989667626566,
            "unit": "iter/sec",
            "range": "stddev: 0.00019301420854775158",
            "extra": "mean: 1.0328455558506489 msec\nrounds: 752"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1864.3949485010314,
            "unit": "iter/sec",
            "range": "stddev: 0.0003660415955394749",
            "extra": "mean: 536.3670400437404 usec\nrounds: 924"
          }
        ]
      }
    ]
  }
}