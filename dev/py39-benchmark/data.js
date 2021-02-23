window.BENCHMARK_DATA = {
  "lastUpdate": 1614089755744,
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
        "date": 1614089754708,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 941.7007801594327,
            "unit": "iter/sec",
            "range": "stddev: 0.0002305858411717026",
            "extra": "mean: 1.0619084331975355 msec\nrounds: 494"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1321.4623645392137,
            "unit": "iter/sec",
            "range": "stddev: 0.0002177689314010931",
            "extra": "mean: 756.737404586391 usec\nrounds: 1090"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 9523.41164649149,
            "unit": "iter/sec",
            "range": "stddev: 0.00003790351889300857",
            "extra": "mean: 105.00438678069838 usec\nrounds: 1740"
          }
        ]
      }
    ]
  }
}