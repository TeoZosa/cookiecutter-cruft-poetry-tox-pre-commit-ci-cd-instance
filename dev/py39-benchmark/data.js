window.BENCHMARK_DATA = {
  "lastUpdate": 1622813824686,
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
          "id": "9229c6a28b743764f179d3d65adca76aff72012d",
          "message": "Merge pull request #201 from TeoZosa/dependabot/pip/importlib-metadata-4.5.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@398d111",
          "timestamp": "2021-06-04T13:29:39Z",
          "tree_id": "0fcf175b38fdb87ae1846d1e2099309c3125f4d2",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/9229c6a28b743764f179d3d65adca76aff72012d"
        },
        "date": 1622813823037,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 918.9554138971711,
            "unit": "iter/sec",
            "range": "stddev: 0.000131597537905263",
            "extra": "mean: 1.0881920764350572 msec\nrounds: 471"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1297.634448269437,
            "unit": "iter/sec",
            "range": "stddev: 0.00010110277972589328",
            "extra": "mean: 770.6330556603434 usec\nrounds: 1042"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8446.06043837163,
            "unit": "iter/sec",
            "range": "stddev: 0.00005179459628834938",
            "extra": "mean: 118.39839500281819 usec\nrounds: 1481"
          }
        ]
      }
    ]
  }
}