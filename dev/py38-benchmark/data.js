window.BENCHMARK_DATA = {
  "lastUpdate": 1621715223349,
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
        "date": 1621715221364,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 879.6125271298299,
            "unit": "iter/sec",
            "range": "stddev: 0.0003041010458170041",
            "extra": "mean: 1.1368642091342123 msec\nrounds: 416"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1175.0985389851173,
            "unit": "iter/sec",
            "range": "stddev: 0.0003430947462172895",
            "extra": "mean: 850.9924630351916 usec\nrounds: 1028"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8505.47108901816,
            "unit": "iter/sec",
            "range": "stddev: 0.000030082541763588294",
            "extra": "mean: 117.57138311729143 usec\nrounds: 1232"
          }
        ]
      }
    ]
  }
}