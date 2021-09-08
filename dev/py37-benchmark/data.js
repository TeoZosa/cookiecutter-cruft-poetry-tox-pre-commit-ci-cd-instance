window.BENCHMARK_DATA = {
  "lastUpdate": 1631107928878,
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
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "bf3b8c817aa4375158b8fdba9ed1e7dc60b070cd",
          "message": "Merge pull request #322 from TeoZosa/dependabot/pip/hypothesis-6.19.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@12f7528",
          "timestamp": "2021-09-08T13:23:44Z",
          "tree_id": "40dec9c97cdce7a34050e96b3b3489ce65f6cd43"
        },
        "date": 1631107926429,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 352.7742362068927,
            "unit": "iter/sec",
            "range": "stddev: 0.00003402537866907783",
            "extra": "mean: 2.8346741268643174 msec\nrounds: 134"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1026.9080756032004,
            "unit": "iter/sec",
            "range": "stddev: 0.000016387911551480942",
            "extra": "mean: 973.7969967882524 usec\nrounds: 934"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2129.821317191063,
            "unit": "iter/sec",
            "range": "stddev: 0.000011641517238026141",
            "extra": "mean: 469.5229557185861 usec\nrounds: 813"
          }
        ]
      }
    ]
  }
}