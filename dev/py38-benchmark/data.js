window.BENCHMARK_DATA = {
  "lastUpdate": 1620000584858,
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
          "id": "ddefea1734e7f9f8c24fe293aedb1c5459172404",
          "message": "Update `Go` version to `1.16`\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@1a85788",
          "timestamp": "2021-05-03T00:05:29Z",
          "tree_id": "0e9720781a4e3e27a434ab7909d852227429e0bf",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/ddefea1734e7f9f8c24fe293aedb1c5459172404"
        },
        "date": 1620000584046,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 965.2688341081425,
            "unit": "iter/sec",
            "range": "stddev: 0.00007864034222888883",
            "extra": "mean: 1.035980821782097 msec\nrounds: 505"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1325.598760566737,
            "unit": "iter/sec",
            "range": "stddev: 0.00006609520046987954",
            "extra": "mean: 754.3760825277682 usec\nrounds: 1139"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8745.641771570306,
            "unit": "iter/sec",
            "range": "stddev: 0.000022315602718015158",
            "extra": "mean: 114.34266645253261 usec\nrounds: 1556"
          }
        ]
      }
    ]
  }
}