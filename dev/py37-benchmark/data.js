window.BENCHMARK_DATA = {
  "lastUpdate": 1622208790636,
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
          "id": "59ee4d51615938ede5a8f605d604c64700232322",
          "message": "Merge pull request #189 from TeoZosa/dependabot/pip/hypothesis-6.13.8\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@c3455d2",
          "timestamp": "2021-05-28T13:26:28Z",
          "tree_id": "cc37474e5c6c2231e242027c517ee94711d7e094",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/59ee4d51615938ede5a8f605d604c64700232322"
        },
        "date": 1622208788783,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1089.788840719293,
            "unit": "iter/sec",
            "range": "stddev: 0.00005293444406545563",
            "extra": "mean: 917.6089556394892 usec\nrounds: 541"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1571.0321931739318,
            "unit": "iter/sec",
            "range": "stddev: 0.00004656928924954096",
            "extra": "mean: 636.524193676589 usec\nrounds: 1265"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 12826.557493945249,
            "unit": "iter/sec",
            "range": "stddev: 0.000011198658869545555",
            "extra": "mean: 77.96324153788325 usec\nrounds: 1743"
          }
        ]
      }
    ]
  }
}