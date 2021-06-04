window.BENCHMARK_DATA = {
  "lastUpdate": 1622813227878,
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
        "date": 1622813225804,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1046.9797892748657,
            "unit": "iter/sec",
            "range": "stddev: 0.00010970070816376378",
            "extra": "mean: 955.1282749140709 usec\nrounds: 582"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1471.9759337329797,
            "unit": "iter/sec",
            "range": "stddev: 0.00013021433474024892",
            "extra": "mean: 679.3589331749243 usec\nrounds: 1257"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 9526.532484597992,
            "unit": "iter/sec",
            "range": "stddev: 0.00003201116082346605",
            "extra": "mean: 104.96998793808226 usec\nrounds: 1741"
          }
        ]
      }
    ]
  }
}