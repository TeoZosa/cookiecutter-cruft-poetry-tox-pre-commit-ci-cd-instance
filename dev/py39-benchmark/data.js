window.BENCHMARK_DATA = {
  "lastUpdate": 1621715367637,
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
          "id": "e15ab8a8c584ef517529fc0cf99113be8081b9d1",
          "message": ":memo: :cookie: Update project preamble\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@3b83156",
          "timestamp": "2021-05-22T20:18:07Z",
          "tree_id": "204795b7ec9e448ad42c01054a031d78bbffefa0",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/e15ab8a8c584ef517529fc0cf99113be8081b9d1"
        },
        "date": 1621715183310,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1035.086884172705,
            "unit": "iter/sec",
            "range": "stddev: 0.00013398090655840253",
            "extra": "mean: 966.1024743823817 usec\nrounds: 527"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1353.7580930070126,
            "unit": "iter/sec",
            "range": "stddev: 0.0001820788942044314",
            "extra": "mean: 738.684411318101 usec\nrounds: 1449"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 9594.424686749764,
            "unit": "iter/sec",
            "range": "stddev: 0.00004808062834800988",
            "extra": "mean: 104.22719784137081 usec\nrounds: 1668"
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
            "email": "action@github.com",
            "name": "GitHub Action",
            "username": "actions-user"
          },
          "distinct": true,
          "id": "77c2b11a6481fa2726af145db90d15437f975175",
          "message": ":construction_worker: Run other auto-formatting hooks prior to test instance update\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@8a4b555",
          "timestamp": "2021-05-22T20:22:20Z",
          "tree_id": "9b5ac9091ed2f759a4902fc1c77a68ec23b7534b",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/77c2b11a6481fa2726af145db90d15437f975175"
        },
        "date": 1621715366095,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1167.1075936810162,
            "unit": "iter/sec",
            "range": "stddev: 0.00009406646354698133",
            "extra": "mean: 856.8190331501787 usec\nrounds: 543"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1599.9977765760516,
            "unit": "iter/sec",
            "range": "stddev: 0.00009781367957480983",
            "extra": "mean: 625.0008685261869 usec\nrounds: 1255"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 11228.5960846101,
            "unit": "iter/sec",
            "range": "stddev: 0.000022257706031100243",
            "extra": "mean: 89.0583286160412 usec\nrounds: 1908"
          }
        ]
      }
    ]
  }
}