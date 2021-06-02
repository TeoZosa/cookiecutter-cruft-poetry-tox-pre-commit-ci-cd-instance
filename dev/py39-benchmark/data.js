window.BENCHMARK_DATA = {
  "lastUpdate": 1622640935483,
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
        "date": 1622640934047,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1231.8513138907222,
            "unit": "iter/sec",
            "range": "stddev: 0.000016329244700394773",
            "extra": "mean: 811.7862835584963 usec\nrounds: 596"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1816.2302568688751,
            "unit": "iter/sec",
            "range": "stddev: 0.000016471385140135413",
            "extra": "mean: 550.5909816324552 usec\nrounds: 1470"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 16341.763768219244,
            "unit": "iter/sec",
            "range": "stddev: 0.000005772123423367857",
            "extra": "mean: 61.192905134558174 usec\nrounds: 1792"
          }
        ]
      }
    ]
  }
}