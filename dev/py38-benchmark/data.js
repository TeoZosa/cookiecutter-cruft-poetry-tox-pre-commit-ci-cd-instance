window.BENCHMARK_DATA = {
  "lastUpdate": 1628258171446,
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
          "id": "76d92c34169e7abff00471cb55c51d76fa910c87",
          "message": "Merge pull request #151 from TeoZosa/dependabot/pip/dot-github/workflows/pip-21.2.3",
          "timestamp": "2021-08-06T13:32:32Z",
          "tree_id": "091f06ad162613cbb38bb73756293a13a060c08a"
        },
        "date": 1628258168495,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 791.6848939706903,
            "unit": "iter/sec",
            "range": "stddev: 0.0004050246881562783",
            "extra": "mean: 1.2631288125058275 msec\nrounds: 352"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1195.7412519604004,
            "unit": "iter/sec",
            "range": "stddev: 0.00021084445557976197",
            "extra": "mean: 836.3013305433049 usec\nrounds: 1195"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 7100.692053079223,
            "unit": "iter/sec",
            "range": "stddev: 0.00011548808281801807",
            "extra": "mean: 140.8313432725686 usec\nrounds: 1576"
          }
        ]
      }
    ]
  }
}