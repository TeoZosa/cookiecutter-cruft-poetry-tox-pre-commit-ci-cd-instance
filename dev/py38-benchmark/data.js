window.BENCHMARK_DATA = {
  "lastUpdate": 1621818346080,
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
          "id": "655b2d5c5a0e3cbdb5e8372cedbaa4e0d379a437",
          "message": ":boom: Rename `container_registry_username` to `container_registry_namespace`\n\nSince the container image namespace may not necessarily be the user's\nuser id namespace (e.g., it may be an organization namespace).\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@a1738e0",
          "timestamp": "2021-05-24T00:58:14Z",
          "tree_id": "9431e1bbffa7088afca7cdc3a70fa0b45585ae1c",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/655b2d5c5a0e3cbdb5e8372cedbaa4e0d379a437"
        },
        "date": 1621818344067,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 849.5034951843725,
            "unit": "iter/sec",
            "range": "stddev: 0.0002417546623613195",
            "extra": "mean: 1.1771581937787843 msec\nrounds: 418"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1215.8196045848706,
            "unit": "iter/sec",
            "range": "stddev: 0.00031259160827781373",
            "extra": "mean: 822.4904387369539 usec\nrounds: 1012"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8120.5175569580215,
            "unit": "iter/sec",
            "range": "stddev: 0.000036530734669050975",
            "extra": "mean: 123.14486028580228 usec\nrounds: 1546"
          }
        ]
      }
    ]
  }
}