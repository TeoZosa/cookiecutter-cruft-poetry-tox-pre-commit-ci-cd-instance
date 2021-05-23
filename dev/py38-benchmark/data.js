window.BENCHMARK_DATA = {
  "lastUpdate": 1621733629173,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action",
            "username": "actions-user"
          },
          "distinct": true,
          "id": "66d0246d3a7ac2315d50ce8543d5c46eec738efc",
          "message": ":bookmark: Bump version number to `0.2.0`\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@371ecaf",
          "timestamp": "2021-05-23T01:26:48Z",
          "tree_id": "372e87e3af7804a1d2eb775efdf3e06660239aca",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/66d0246d3a7ac2315d50ce8543d5c46eec738efc"
        },
        "date": 1621733627521,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1387.0179017199446,
            "unit": "iter/sec",
            "range": "stddev: 0.00008615324834915919",
            "extra": "mean: 720.9712281002065 usec\nrounds: 605"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 2006.0632837829633,
            "unit": "iter/sec",
            "range": "stddev: 0.00006614181320940078",
            "extra": "mean: 498.4887605909597 usec\nrounds: 1487"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 14930.69192839038,
            "unit": "iter/sec",
            "range": "stddev: 0.000010713621599107551",
            "extra": "mean: 66.97613243888061 usec\nrounds: 1714"
          }
        ]
      }
    ]
  }
}