window.BENCHMARK_DATA = {
  "lastUpdate": 1626442101474,
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
          "id": "e58a45c3aff709e248dcda73de45964734f39dc0",
          "message": "Merge pull request #108 from TeoZosa/dependabot/github_actions/actions/setup-node-2.2.0",
          "timestamp": "2021-07-16T13:14:25Z",
          "tree_id": "76df9e1d66a5e2bd05da13dfcf3f8ab30fc35fd7"
        },
        "date": 1626442098887,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 954.2816453463654,
            "unit": "iter/sec",
            "range": "stddev: 0.00026250972599061443",
            "extra": "mean: 1.0479086597511165 msec\nrounds: 482"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1489.268925525484,
            "unit": "iter/sec",
            "range": "stddev: 0.00013683849974336563",
            "extra": "mean: 671.4703992411263 usec\nrounds: 1320"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 9290.253624563667,
            "unit": "iter/sec",
            "range": "stddev: 0.00003814609953396288",
            "extra": "mean: 107.63968782897106 usec\nrounds: 2095"
          }
        ]
      }
    ]
  }
}