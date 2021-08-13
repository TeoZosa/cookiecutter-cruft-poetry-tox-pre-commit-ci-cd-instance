window.BENCHMARK_DATA = {
  "lastUpdate": 1628865977596,
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
          "id": "7560bba639e012332b1edb621c230abbf73ff5a8",
          "message": "Merge pull request #161 from TeoZosa/dependabot/pip/matplotlib-3.4.3",
          "timestamp": "2021-08-13T14:23:28Z",
          "tree_id": "5b68aff2a4903d69bc27ea12f7cc479963a1489c"
        },
        "date": 1628865974908,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 314.57225753343545,
            "unit": "iter/sec",
            "range": "stddev: 0.000071007222819123",
            "extra": "mean: 3.178919869924357 msec\nrounds: 123"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 915.4309283151601,
            "unit": "iter/sec",
            "range": "stddev: 0.00003180987295319624",
            "extra": "mean: 1.0923817068760047 msec\nrounds: 771"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1881.4479625602874,
            "unit": "iter/sec",
            "range": "stddev: 0.000019620957564923416",
            "extra": "mean: 531.5055318560036 usec\nrounds: 722"
          }
        ]
      }
    ]
  }
}