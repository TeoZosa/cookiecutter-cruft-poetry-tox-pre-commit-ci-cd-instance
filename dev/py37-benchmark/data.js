window.BENCHMARK_DATA = {
  "lastUpdate": 1621818294661,
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
        "date": 1621818293218,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1031.1139695325883,
            "unit": "iter/sec",
            "range": "stddev: 0.00002893125926699589",
            "extra": "mean: 969.8248976815896 usec\nrounds: 518"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1466.6747972760375,
            "unit": "iter/sec",
            "range": "stddev: 0.000025462421657684135",
            "extra": "mean: 681.8144021137043 usec\nrounds: 1231"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 11107.433395232316,
            "unit": "iter/sec",
            "range": "stddev: 0.00003201453802923295",
            "extra": "mean: 90.02979936204106 usec\nrounds: 1570"
          }
        ]
      }
    ]
  }
}