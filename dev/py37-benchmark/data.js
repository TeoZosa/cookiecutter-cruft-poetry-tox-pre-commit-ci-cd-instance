window.BENCHMARK_DATA = {
  "lastUpdate": 1620001034263,
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
          "id": "bd30812da5cb7fe7bd4b29cdd8149c14f3482946",
          "message": ":arrow_up: Update `Go` version to `1.16`\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@07fd0ca",
          "timestamp": "2021-05-03T00:12:16Z",
          "tree_id": "3f5cdab40c1fcda4d5d394a3fae8a61b5ad98389",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/bd30812da5cb7fe7bd4b29cdd8149c14f3482946"
        },
        "date": 1620001032685,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 925.7773868438204,
            "unit": "iter/sec",
            "range": "stddev: 0.000223712754039805",
            "extra": "mean: 1.0801732837839353 msec\nrounds: 518"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1254.1743950188556,
            "unit": "iter/sec",
            "range": "stddev: 0.00023215369884803933",
            "extra": "mean: 797.3372793860664 usec\nrounds: 1174"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8314.62969128726,
            "unit": "iter/sec",
            "range": "stddev: 0.00006633778441429219",
            "extra": "mean: 120.2699383049952 usec\nrounds: 1864"
          }
        ]
      }
    ]
  }
}