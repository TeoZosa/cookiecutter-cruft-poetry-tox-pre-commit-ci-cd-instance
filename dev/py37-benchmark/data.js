window.BENCHMARK_DATA = {
  "lastUpdate": 1621733661343,
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
        "date": 1621733659536,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 866.3121626102175,
            "unit": "iter/sec",
            "range": "stddev: 0.0004943135447489557",
            "extra": "mean: 1.1543183198386344 msec\nrounds: 494"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1239.6826526946393,
            "unit": "iter/sec",
            "range": "stddev: 0.00016448010954501197",
            "extra": "mean: 806.6580570651267 usec\nrounds: 1104"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 7443.464953798667,
            "unit": "iter/sec",
            "range": "stddev: 0.00008484895868277665",
            "extra": "mean: 134.3460345695138 usec\nrounds: 1591"
          }
        ]
      }
    ]
  }
}