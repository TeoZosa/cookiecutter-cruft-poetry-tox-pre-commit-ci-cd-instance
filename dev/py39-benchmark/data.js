window.BENCHMARK_DATA = {
  "lastUpdate": 1624889621690,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "041dc8e8aea170993edd858633fda9a6bf061b78",
          "message": "Merge pull request #81 from TeoZosa/dependabot/pip/docs/poetry-1.1.7",
          "timestamp": "2021-06-28T13:17:39Z",
          "tree_id": "e8fde4be41f8ef06e22fc672a3945b5754327ed4"
        },
        "date": 1624889619923,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1252.5465344830977,
            "unit": "iter/sec",
            "range": "stddev: 0.00001614618676958726",
            "extra": "mean: 798.3735314174824 usec\nrounds: 557"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1848.3089581362208,
            "unit": "iter/sec",
            "range": "stddev: 0.00001525742222334584",
            "extra": "mean: 541.035088099324 usec\nrounds: 1294"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 14581.121227159478,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037865400153453075",
            "extra": "mean: 68.58183156294959 usec\nrounds: 1882"
          }
        ]
      }
    ]
  }
}