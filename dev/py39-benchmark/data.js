window.BENCHMARK_DATA = {
  "lastUpdate": 1613399692123,
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
          "id": "a67349a69dfe4315b5b0c4366a3a12221911183e",
          "message": "Merge pull request #67 from TeoZosa/dependabot/pip/pytest-xdist-2.2.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@ebe50ad",
          "timestamp": "2021-02-15T14:30:17Z",
          "tree_id": "12207b52f6bc68ca309278f7cb960c23472e6e26",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/a67349a69dfe4315b5b0c4366a3a12221911183e"
        },
        "date": 1613399690818,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 975.0122854498572,
            "unit": "iter/sec",
            "range": "stddev: 0.00020385749482852822",
            "extra": "mean: 1.0256281022537206 msec\nrounds: 577"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1372.4433141642364,
            "unit": "iter/sec",
            "range": "stddev: 0.0003923133342390653",
            "extra": "mean: 728.6275430682981 usec\nrounds: 1219"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 9936.913886705779,
            "unit": "iter/sec",
            "range": "stddev: 0.00003924767186898524",
            "extra": "mean: 100.63486625740636 usec\nrounds: 1630"
          }
        ]
      }
    ]
  }
}