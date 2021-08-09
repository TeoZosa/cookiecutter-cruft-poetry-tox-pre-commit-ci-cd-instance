window.BENCHMARK_DATA = {
  "lastUpdate": 1628522834483,
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
          "id": "c685869ba45c6d7c3834f34a83f8a5ef083f1881",
          "message": "Merge pull request #152 from TeoZosa/dependabot/github_actions/actions/setup-node-2.4.0",
          "timestamp": "2021-08-09T13:27:45Z",
          "tree_id": "b8f6c6c69ab356957685b141a4f702a02b25ef79"
        },
        "date": 1628522832537,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 354.2627737509725,
            "unit": "iter/sec",
            "range": "stddev: 0.00003783133481378061",
            "extra": "mean: 2.822763423353496 msec\nrounds: 137"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1026.6384974333619,
            "unit": "iter/sec",
            "range": "stddev: 0.000016496816720994097",
            "extra": "mean: 974.0526996601442 usec\nrounds: 879"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2153.4662155191263,
            "unit": "iter/sec",
            "range": "stddev: 0.000010241214146483606",
            "extra": "mean: 464.3676287064177 usec\nrounds: 843"
          }
        ]
      }
    ]
  }
}