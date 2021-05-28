window.BENCHMARK_DATA = {
  "lastUpdate": 1622208786713,
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
        "date": 1622208784509,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1079.7747476466884,
            "unit": "iter/sec",
            "range": "stddev: 0.0000202779949194699",
            "extra": "mean: 926.1190837991412 usec\nrounds: 537"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1582.414694804222,
            "unit": "iter/sec",
            "range": "stddev: 0.000021940979474715642",
            "extra": "mean: 631.9455976258619 usec\nrounds: 1347"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 12770.898202198801,
            "unit": "iter/sec",
            "range": "stddev: 0.000006544471841888368",
            "extra": "mean: 78.30302803821795 usec\nrounds: 1498"
          }
        ]
      }
    ]
  }
}