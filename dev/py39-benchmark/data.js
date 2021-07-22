window.BENCHMARK_DATA = {
  "lastUpdate": 1626962186342,
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
          "id": "c23907f7a70de5a2161901eec3b532f06499033e",
          "message": "Merge pull request #122 from TeoZosa/dependabot/github_actions/crazy-max/ghaction-github-labeler-3.1.1",
          "timestamp": "2021-07-22T13:49:53Z",
          "tree_id": "883ffcaba695208487677accf3ee8c844974de8d"
        },
        "date": 1626962184770,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1130.0661089787493,
            "unit": "iter/sec",
            "range": "stddev: 0.000053668713665935445",
            "extra": "mean: 884.9039822136677 usec\nrounds: 506"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1666.5879088941283,
            "unit": "iter/sec",
            "range": "stddev: 0.00004492282155043152",
            "extra": "mean: 600.028354137979 usec\nrounds: 1426"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13531.11062291712,
            "unit": "iter/sec",
            "range": "stddev: 0.00000806202550221789",
            "extra": "mean: 73.90376354667728 usec\nrounds: 1827"
          }
        ]
      }
    ]
  }
}