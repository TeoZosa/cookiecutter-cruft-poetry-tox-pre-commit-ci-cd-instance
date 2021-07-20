window.BENCHMARK_DATA = {
  "lastUpdate": 1626789877636,
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
        "date": 1626789876038,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1049.2555297317556,
            "unit": "iter/sec",
            "range": "stddev: 0.000020891187976825387",
            "extra": "mean: 953.0566879696618 usec\nrounds: 532"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1510.1182982641783,
            "unit": "iter/sec",
            "range": "stddev: 0.0000198698102723358",
            "extra": "mean: 662.1997767654764 usec\nrounds: 1317"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 11597.412877307012,
            "unit": "iter/sec",
            "range": "stddev: 0.000006076321091217174",
            "extra": "mean: 86.22612737679871 usec\nrounds: 1578"
          }
        ]
      }
    ]
  }
}