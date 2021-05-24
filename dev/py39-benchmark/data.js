window.BENCHMARK_DATA = {
  "lastUpdate": 1621818318654,
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
        "date": 1621818316755,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 947.0185736958645,
            "unit": "iter/sec",
            "range": "stddev: 0.0001520281226121055",
            "extra": "mean: 1.0559454986161132 msec\nrounds: 361"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1354.367625716334,
            "unit": "iter/sec",
            "range": "stddev: 0.00023261248664844668",
            "extra": "mean: 738.351966639112 usec\nrounds: 1259"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 10002.620738258222,
            "unit": "iter/sec",
            "range": "stddev: 0.000025506121032357093",
            "extra": "mean: 99.97379948388728 usec\nrounds: 1551"
          }
        ]
      }
    ]
  }
}