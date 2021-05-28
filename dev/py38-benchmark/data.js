window.BENCHMARK_DATA = {
  "lastUpdate": 1622208329987,
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
        "date": 1622208328146,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 941.2114658619754,
            "unit": "iter/sec",
            "range": "stddev: 0.00048681702317646304",
            "extra": "mean: 1.062460495085645 msec\nrounds: 509"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1399.6106946464265,
            "unit": "iter/sec",
            "range": "stddev: 0.00010145178152156414",
            "extra": "mean: 714.4843947142192 usec\nrounds: 1173"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8773.311295644759,
            "unit": "iter/sec",
            "range": "stddev: 0.00004518252377434848",
            "extra": "mean: 113.98204922882645 usec\nrounds: 1747"
          }
        ]
      }
    ]
  }
}