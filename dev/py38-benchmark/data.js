window.BENCHMARK_DATA = {
  "lastUpdate": 1622048530246,
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
          "id": "b6b44a3764fdb1e50642a5f7e8180818515692de",
          "message": "Merge pull request #186 from TeoZosa/dependabot/pip/hypothesis-6.13.6\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@e8dfa22",
          "timestamp": "2021-05-26T16:55:13Z",
          "tree_id": "36065c967f1bce02077796250d2690e4be212cd9",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/b6b44a3764fdb1e50642a5f7e8180818515692de"
        },
        "date": 1622048528048,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 965.8697193815325,
            "unit": "iter/sec",
            "range": "stddev: 0.0001486957403162318",
            "extra": "mean: 1.035336319105564 msec\nrounds: 492"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1373.4994867043706,
            "unit": "iter/sec",
            "range": "stddev: 0.00015742932251957965",
            "extra": "mean: 728.0672542509934 usec\nrounds: 1294"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8706.171827074566,
            "unit": "iter/sec",
            "range": "stddev: 0.00003828637441601902",
            "extra": "mean: 114.86104568832273 usec\nrounds: 1751"
          }
        ]
      }
    ]
  }
}