window.BENCHMARK_DATA = {
  "lastUpdate": 1622468744098,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action",
            "username": "actions-user"
          },
          "distinct": true,
          "id": "efae57f0bbe215ccced8c1d118b45fb212f7544a",
          "message": "Merge pull request #192 from TeoZosa/dependabot/pip/importlib-metadata-4.3.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@7f13f3e",
          "timestamp": "2021-05-31T13:38:56Z",
          "tree_id": "efa8c7e7dfdce338070b9b013b7a1fc4f77f0730",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/efae57f0bbe215ccced8c1d118b45fb212f7544a"
        },
        "date": 1622468742442,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1100.941971798993,
            "unit": "iter/sec",
            "range": "stddev: 0.00003294984520225095",
            "extra": "mean: 908.3130860802327 usec\nrounds: 546"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1623.5911105155235,
            "unit": "iter/sec",
            "range": "stddev: 0.00002757600300506533",
            "extra": "mean: 615.9186223201724 usec\nrounds: 1353"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 11799.892645157961,
            "unit": "iter/sec",
            "range": "stddev: 0.000007566209710965766",
            "extra": "mean: 84.74653372463911 usec\nrounds: 1705"
          }
        ]
      }
    ]
  }
}