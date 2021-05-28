window.BENCHMARK_DATA = {
  "lastUpdate": 1622208345917,
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
          "id": "d7ea1d8f752e59c8380002a8b0b6a38d6a5ae7d9",
          "message": "Merge pull request #190 from TeoZosa/dependabot/pip/importlib-metadata-4.3.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@c7c1631",
          "timestamp": "2021-05-28T13:18:27Z",
          "tree_id": "5a6a814261b70911424013d3e9dfa2787eb8b3fb",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/d7ea1d8f752e59c8380002a8b0b6a38d6a5ae7d9"
        },
        "date": 1622208344029,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 912.7597149501582,
            "unit": "iter/sec",
            "range": "stddev: 0.00040963701339811684",
            "extra": "mean: 1.0955785883414075 msec\nrounds: 549"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1285.1127804618418,
            "unit": "iter/sec",
            "range": "stddev: 0.00029393716485281513",
            "extra": "mean: 778.1418216388927 usec\nrounds: 1183"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8524.318856417596,
            "unit": "iter/sec",
            "range": "stddev: 0.00004420879437087443",
            "extra": "mean: 117.31142591494482 usec\nrounds: 1667"
          }
        ]
      }
    ]
  }
}