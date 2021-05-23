window.BENCHMARK_DATA = {
  "lastUpdate": 1621733654255,
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
        "date": 1621733652523,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1223.0058735054233,
            "unit": "iter/sec",
            "range": "stddev: 0.00009379551530912533",
            "extra": "mean: 817.6575613114302 usec\nrounds: 579"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1852.8092898720636,
            "unit": "iter/sec",
            "range": "stddev: 0.00006826593190613623",
            "extra": "mean: 539.7209553440063 usec\nrounds: 1366"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 15386.216384722551,
            "unit": "iter/sec",
            "range": "stddev: 0.00001061867524765565",
            "extra": "mean: 64.99323647839314 usec\nrounds: 1738"
          }
        ]
      }
    ]
  }
}