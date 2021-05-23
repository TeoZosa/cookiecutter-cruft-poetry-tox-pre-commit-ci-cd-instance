window.BENCHMARK_DATA = {
  "lastUpdate": 1621733902522,
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
      },
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "distinct": true,
          "id": "fd43e632a05a1b3fb920b69ddc3a0c5e8a340203",
          "message": ":bookmark: Bump version number to `0.0.2`",
          "timestamp": "2021-05-22T18:31:20-07:00",
          "tree_id": "d8e7283d08f4f30b899a076f0d45588bb2671bf2",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/fd43e632a05a1b3fb920b69ddc3a0c5e8a340203"
        },
        "date": 1621733900688,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 913.9271575634231,
            "unit": "iter/sec",
            "range": "stddev: 0.00025322575600746544",
            "extra": "mean: 1.0941791057681791 msec\nrounds: 416"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1406.7130149560517,
            "unit": "iter/sec",
            "range": "stddev: 0.00015044611128522538",
            "extra": "mean: 710.8770512308382 usec\nrounds: 1503"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 9207.229129250087,
            "unit": "iter/sec",
            "range": "stddev: 0.00004456125866254843",
            "extra": "mean: 108.61030891727665 usec\nrounds: 1884"
          }
        ]
      }
    ]
  }
}