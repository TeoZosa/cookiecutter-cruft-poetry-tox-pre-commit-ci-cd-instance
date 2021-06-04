window.BENCHMARK_DATA = {
  "lastUpdate": 1622813201874,
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
        "date": 1622813200338,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1270.3742934950178,
            "unit": "iter/sec",
            "range": "stddev: 0.000015297941800633638",
            "extra": "mean: 787.1695807452371 usec\nrounds: 644"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1861.0088336786362,
            "unit": "iter/sec",
            "range": "stddev: 0.00001705276736847075",
            "extra": "mean: 537.3429625389315 usec\nrounds: 1575"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13596.209153187354,
            "unit": "iter/sec",
            "range": "stddev: 0.000004579040658921714",
            "extra": "mean: 73.54991297449779 usec\nrounds: 1873"
          }
        ]
      }
    ]
  }
}