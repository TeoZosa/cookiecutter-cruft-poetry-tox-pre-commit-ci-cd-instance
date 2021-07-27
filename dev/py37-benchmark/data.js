window.BENCHMARK_DATA = {
  "lastUpdate": 1627394500853,
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
          "id": "7aafc05e62abf5a7a0fff796845c3b1106da8e11",
          "message": "Merge pull request #130 from TeoZosa/dependabot/github_actions/crazy-max/ghaction-github-labeler-3.1.1",
          "timestamp": "2021-07-27T13:13:12Z",
          "tree_id": "5c2d6f0150478011f895cecaddad2004d73c0665"
        },
        "date": 1627394499254,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1226.8969206665317,
            "unit": "iter/sec",
            "range": "stddev: 0.00001580724388590473",
            "extra": "mean: 815.0643979583336 usec\nrounds: 588"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1764.399799336359,
            "unit": "iter/sec",
            "range": "stddev: 0.000016826175118240544",
            "extra": "mean: 566.7649703747011 usec\nrounds: 1519"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13329.925369368179,
            "unit": "iter/sec",
            "range": "stddev: 0.000005709859444018892",
            "extra": "mean: 75.01917469830506 usec\nrounds: 1826"
          }
        ]
      }
    ]
  }
}