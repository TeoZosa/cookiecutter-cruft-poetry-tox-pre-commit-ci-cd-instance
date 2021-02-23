window.BENCHMARK_DATA = {
  "lastUpdate": 1614089735989,
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
        "date": 1614089734860,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1059.164215930939,
            "unit": "iter/sec",
            "range": "stddev: 0.000018647729740958077",
            "extra": "mean: 944.1406582274521 usec\nrounds: 553"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1512.5008630975128,
            "unit": "iter/sec",
            "range": "stddev: 0.000023800723003650702",
            "extra": "mean: 661.1566475089865 usec\nrounds: 1305"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 11952.507716212076,
            "unit": "iter/sec",
            "range": "stddev: 0.0000060039821443270064",
            "extra": "mean: 83.66445132209583 usec\nrounds: 1777"
          }
        ]
      }
    ]
  }
}