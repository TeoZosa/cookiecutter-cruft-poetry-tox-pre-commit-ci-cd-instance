window.BENCHMARK_DATA = {
  "lastUpdate": 1626442106602,
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
        "date": 1626442104711,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1225.7302734118234,
            "unit": "iter/sec",
            "range": "stddev: 0.00001823667629824281",
            "extra": "mean: 815.8401743774325 usec\nrounds: 562"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1815.4992097371899,
            "unit": "iter/sec",
            "range": "stddev: 0.000017691415059843456",
            "extra": "mean: 550.8126881227115 usec\nrounds: 1507"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 14602.508711066566,
            "unit": "iter/sec",
            "range": "stddev: 0.000004162357160984397",
            "extra": "mean: 68.48138356131548 usec\nrounds: 1898"
          }
        ]
      }
    ]
  }
}