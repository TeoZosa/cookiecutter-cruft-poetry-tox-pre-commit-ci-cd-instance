window.BENCHMARK_DATA = {
  "lastUpdate": 1626788940288,
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
        "date": 1626788938961,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1242.468103573221,
            "unit": "iter/sec",
            "range": "stddev: 0.00001555671366516817",
            "extra": "mean: 804.8496352736094 usec\nrounds: 584"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1783.1144088614578,
            "unit": "iter/sec",
            "range": "stddev: 0.00001632711992265416",
            "extra": "mean: 560.8165101635365 usec\nrounds: 1525"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13496.287747586262,
            "unit": "iter/sec",
            "range": "stddev: 0.000005975141715744221",
            "extra": "mean: 74.09444868859175 usec\nrounds: 1754"
          }
        ]
      }
    ]
  }
}