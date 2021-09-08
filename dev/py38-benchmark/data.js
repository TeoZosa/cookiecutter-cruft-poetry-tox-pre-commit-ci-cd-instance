window.BENCHMARK_DATA = {
  "lastUpdate": 1631107930280,
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
        "date": 1631107927676,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 307.192001070643,
            "unit": "iter/sec",
            "range": "stddev: 0.00020875167504750362",
            "extra": "mean: 3.255293095245785 msec\nrounds: 126"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 934.5181709045653,
            "unit": "iter/sec",
            "range": "stddev: 0.00007962022509940136",
            "extra": "mean: 1.070070150730244 msec\nrounds: 889"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1856.422072247978,
            "unit": "iter/sec",
            "range": "stddev: 0.00005589283364211942",
            "extra": "mean: 538.6706045727416 usec\nrounds: 875"
          }
        ]
      }
    ]
  }
}