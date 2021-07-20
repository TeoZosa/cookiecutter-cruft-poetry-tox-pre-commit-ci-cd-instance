window.BENCHMARK_DATA = {
  "lastUpdate": 1626789865723,
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
          "id": "153b44f362e95c03cceeb32073c22cc0a475ccee",
          "message": "Merge pull request #115 from TeoZosa/dependabot/github_actions/actions/setup-node-2.3.0",
          "timestamp": "2021-07-20T13:25:21Z",
          "tree_id": "19cc98f494b688eb40550775e3814e7950ce2429"
        },
        "date": 1626789864313,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 980.084476672506,
            "unit": "iter/sec",
            "range": "stddev: 0.00012230708433636164",
            "extra": "mean: 1.0203202109629463 msec\nrounds: 493"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1357.443812257723,
            "unit": "iter/sec",
            "range": "stddev: 0.00007866566749811478",
            "extra": "mean: 736.6787420370523 usec\nrounds: 1256"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8520.49689012078,
            "unit": "iter/sec",
            "range": "stddev: 0.000023694535039494447",
            "extra": "mean: 117.36404729628683 usec\nrounds: 1628"
          }
        ]
      }
    ]
  }
}