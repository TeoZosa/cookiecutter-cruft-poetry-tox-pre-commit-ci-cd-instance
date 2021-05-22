window.BENCHMARK_DATA = {
  "lastUpdate": 1621715185110,
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
      }
    ]
  }
}