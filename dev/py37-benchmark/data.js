window.BENCHMARK_DATA = {
  "lastUpdate": 1623072205054,
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
          "id": "3ede43598d10ed44b8712890fe6f5872efb57fd5",
          "message": "Merge pull request #203 from TeoZosa/dependabot/github_actions/JamesIves/github-pages-deploy-action-4.1.4\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@3a0ec1a",
          "timestamp": "2021-06-07T13:16:09Z",
          "tree_id": "dea4c9ea3cb9e43da973e0596f245f88dec3cdb7"
        },
        "date": 1623072203146,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1048.8657130766628,
            "unit": "iter/sec",
            "range": "stddev: 0.000021169296611790095",
            "extra": "mean: 953.4108966787333 usec\nrounds: 542"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1494.4675314750095,
            "unit": "iter/sec",
            "range": "stddev: 0.000021983496323555696",
            "extra": "mean: 669.1346442388214 usec\nrounds: 1293"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 10168.14492877108,
            "unit": "iter/sec",
            "range": "stddev: 0.0001599144278196606",
            "extra": "mean: 98.34635589924267 usec\nrounds: 1551"
          }
        ]
      }
    ]
  }
}