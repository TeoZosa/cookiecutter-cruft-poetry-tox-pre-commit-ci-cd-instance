window.BENCHMARK_DATA = {
  "lastUpdate": 1622640915435,
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
          "id": "4db2cfc417d0ce5188bcd610adf4a91cfd10f43b",
          "message": "Merge pull request #198 from TeoZosa/dependabot/pip/pytest-cov-2.12.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@9bdf2a4",
          "timestamp": "2021-06-02T13:29:36Z",
          "tree_id": "5dd56e5938f99229bfe8273e50704f835e459106",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/4db2cfc417d0ce5188bcd610adf4a91cfd10f43b"
        },
        "date": 1622640913950,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1218.167459547505,
            "unit": "iter/sec",
            "range": "stddev: 0.00001606405487624571",
            "extra": "mean: 820.9051983472417 usec\nrounds: 484"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1749.4512901366995,
            "unit": "iter/sec",
            "range": "stddev: 0.000016284861768785057",
            "extra": "mean: 571.6077981924616 usec\nrounds: 1437"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13411.489659395316,
            "unit": "iter/sec",
            "range": "stddev: 0.000004479698852503219",
            "extra": "mean: 74.56293263436682 usec\nrounds: 1811"
          }
        ]
      }
    ]
  }
}