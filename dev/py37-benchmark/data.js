window.BENCHMARK_DATA = {
  "lastUpdate": 1626962254890,
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
        "date": 1626962252750,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 824.9603312197663,
            "unit": "iter/sec",
            "range": "stddev: 0.00035750417449385597",
            "extra": "mean: 1.212179497796487 msec\nrounds: 454"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1127.446504233661,
            "unit": "iter/sec",
            "range": "stddev: 0.0002552580438959963",
            "extra": "mean: 886.960043110615 usec\nrounds: 1183"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 7517.882795832518,
            "unit": "iter/sec",
            "range": "stddev: 0.00005369273032615461",
            "extra": "mean: 133.01617319098702 usec\nrounds: 1507"
          }
        ]
      }
    ]
  }
}