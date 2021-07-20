window.BENCHMARK_DATA = {
  "lastUpdate": 1626788930914,
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
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "c2c33c351e9fb69e58b6ed65251aa87c5eb42222",
          "message": "Merge pull request #250 from TeoZosa/dependabot/github_actions/actions/setup-node-2.3.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@fde4ac5",
          "timestamp": "2021-07-20T13:23:15Z",
          "tree_id": "16d33e9488e9bd05ae12509fb647f8b1e1cf3e68"
        },
        "date": 1626788929722,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1246.1719522493675,
            "unit": "iter/sec",
            "range": "stddev: 0.00001597906271228687",
            "extra": "mean: 802.4574764301013 usec\nrounds: 594"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1831.1267510408854,
            "unit": "iter/sec",
            "range": "stddev: 0.00001477615821155227",
            "extra": "mean: 546.1118403909288 usec\nrounds: 1535"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 14561.03750591726,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036734007483869687",
            "extra": "mean: 68.67642498644919 usec\nrounds: 1793"
          }
        ]
      }
    ]
  }
}