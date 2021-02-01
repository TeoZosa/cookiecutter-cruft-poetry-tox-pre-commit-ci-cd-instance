window.BENCHMARK_DATA = {
  "lastUpdate": 1612146860234,
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
          "id": "8a1dd8640a0346550b08a1b32f34754672ffc172",
          "message": ":sparkles: Add `icontract` benchmarks\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@f8b7975",
          "timestamp": "2021-02-01T02:29:59Z",
          "tree_id": "2a10251c9d32f99f67e46d7a51b5923abe139351",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/8a1dd8640a0346550b08a1b32f34754672ffc172"
        },
        "date": 1612146858826,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1149.6543761825633,
            "unit": "iter/sec",
            "range": "stddev: 0.00022276399142642775",
            "extra": "mean: 869.8266372198817 usec\nrounds: 532"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1569.7952183046912,
            "unit": "iter/sec",
            "range": "stddev: 0.0002276024083241107",
            "extra": "mean: 637.0257651058176 usec\nrounds: 1622"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 10652.098522341594,
            "unit": "iter/sec",
            "range": "stddev: 0.000022300571907068652",
            "extra": "mean: 93.87821544295812 usec\nrounds: 1606"
          }
        ]
      }
    ]
  }
}