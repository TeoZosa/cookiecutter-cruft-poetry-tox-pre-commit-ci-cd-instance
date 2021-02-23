window.BENCHMARK_DATA = {
  "lastUpdate": 1614089697486,
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
          "id": "600020dd155ae1d15855ff63f8b0a65fbcf694ab",
          "message": "Merge pull request #82 from TeoZosa/dependabot/github_actions/actions/setup-node-v2.1.5\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@4fcae95",
          "timestamp": "2021-02-23T14:10:56Z",
          "tree_id": "fb02a54b22b28800ea6409274885f66c4af55834",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/600020dd155ae1d15855ff63f8b0a65fbcf694ab"
        },
        "date": 1614089696020,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1299.7023549063586,
            "unit": "iter/sec",
            "range": "stddev: 0.00001622147236685791",
            "extra": "mean: 769.4069309215404 usec\nrounds: 608"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1916.8046411281298,
            "unit": "iter/sec",
            "range": "stddev: 0.00002687859635676521",
            "extra": "mean: 521.7015748727804 usec\nrounds: 1576"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 14487.833571420813,
            "unit": "iter/sec",
            "range": "stddev: 0.000004085269776154179",
            "extra": "mean: 69.02343232135367 usec\nrounds: 1943"
          }
        ]
      }
    ]
  }
}