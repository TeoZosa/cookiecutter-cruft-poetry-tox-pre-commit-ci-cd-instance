window.BENCHMARK_DATA = {
  "lastUpdate": 1622813283228,
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
          "id": "edf8f49a5f6b34e094147e33bf866e83e2e26e41",
          "message": "Merge pull request #200 from TeoZosa/dependabot/pip/hypothesis-6.13.14\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@be72c31",
          "timestamp": "2021-06-04T13:19:37Z",
          "tree_id": "e99ab8865fedc56b2a0711ef9970ebc7fcc2781d",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/edf8f49a5f6b34e094147e33bf866e83e2e26e41"
        },
        "date": 1622813280865,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 915.9204953602932,
            "unit": "iter/sec",
            "range": "stddev: 0.00010323192285654303",
            "extra": "mean: 1.0917978198605902 msec\nrounds: 433"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1277.3979275453926,
            "unit": "iter/sec",
            "range": "stddev: 0.00009408513772170702",
            "extra": "mean: 782.8414141250162 usec\nrounds: 1246"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8648.387109370478,
            "unit": "iter/sec",
            "range": "stddev: 0.000025221332948620153",
            "extra": "mean: 115.62849666112953 usec\nrounds: 1647"
          }
        ]
      }
    ]
  }
}