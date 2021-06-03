window.BENCHMARK_DATA = {
  "lastUpdate": 1622726700498,
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
          "id": "3c90595ddde6f66bd491b962de4cf5b6fa829118",
          "message": "Merge pull request #199 from TeoZosa/dependabot/pip/hypothesis-6.13.12\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@83f41c0",
          "timestamp": "2021-06-03T13:18:40Z",
          "tree_id": "20f5ff199debad842d7275599e0cc529653f25c2",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/3c90595ddde6f66bd491b962de4cf5b6fa829118"
        },
        "date": 1622726698245,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1162.7440055008244,
            "unit": "iter/sec",
            "range": "stddev: 0.00006686132221028486",
            "extra": "mean: 860.0345349183493 usec\nrounds: 673"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1699.1182074363242,
            "unit": "iter/sec",
            "range": "stddev: 0.00005644688768797428",
            "extra": "mean: 588.5405709993698 usec\nrounds: 1331"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13473.305934980684,
            "unit": "iter/sec",
            "range": "stddev: 0.000011490932236718624",
            "extra": "mean: 74.2208337601616 usec\nrounds: 1564"
          }
        ]
      }
    ]
  }
}