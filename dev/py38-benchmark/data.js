window.BENCHMARK_DATA = {
  "lastUpdate": 1629128539260,
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
          "id": "b034fcdb371e5cfefa2ae61207fcfbe62fb438ff",
          "message": "Merge pull request #165 from TeoZosa/dependabot/pip/pygments-2.10.0",
          "timestamp": "2021-08-16T14:50:25Z",
          "tree_id": "a24f62095abb4c26fca4a913c9c6cb3b079b68ed"
        },
        "date": 1629128537843,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 411.5003902121999,
            "unit": "iter/sec",
            "range": "stddev: 0.00004104156816092148",
            "extra": "mean: 2.4301313529358413 msec\nrounds: 153"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1201.7594122349858,
            "unit": "iter/sec",
            "range": "stddev: 0.000016417135901945627",
            "extra": "mean: 832.1133080540959 usec\nrounds: 1068"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2484.92342291083,
            "unit": "iter/sec",
            "range": "stddev: 0.000009525752020050903",
            "extra": "mean: 402.42688799987394 usec\nrounds: 875"
          }
        ]
      }
    ]
  }
}