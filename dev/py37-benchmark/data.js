window.BENCHMARK_DATA = {
  "lastUpdate": 1612146877296,
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
        "date": 1612146876329,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1111.4716228315244,
            "unit": "iter/sec",
            "range": "stddev: 0.000043302196081127483",
            "extra": "mean: 899.7080802229161 usec\nrounds: 536"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1573.0711323020894,
            "unit": "iter/sec",
            "range": "stddev: 0.000031189813145282054",
            "extra": "mean: 635.6991616371242 usec\nrounds: 1392"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 12189.038180831434,
            "unit": "iter/sec",
            "range": "stddev: 0.000007240363322129134",
            "extra": "mean: 82.04092768965208 usec\nrounds: 1701"
          }
        ]
      }
    ]
  }
}