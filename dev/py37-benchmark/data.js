window.BENCHMARK_DATA = {
  "lastUpdate": 1612147113214,
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
          "id": "b30ed7019da7c6cf10759fc1a5056182b174a069",
          "message": ":sparkles: Add `icontract` benchmarks\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@e7a67d1",
          "timestamp": "2021-02-01T02:33:07Z",
          "tree_id": "46f00833b8c7d07f4c0ac4e8cd26e27a47d09498",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/b30ed7019da7c6cf10759fc1a5056182b174a069"
        },
        "date": 1612147111826,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 852.3825926086836,
            "unit": "iter/sec",
            "range": "stddev: 0.00030259565106426696",
            "extra": "mean: 1.173182099999883 msec\nrounds: 470"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1183.1282359903919,
            "unit": "iter/sec",
            "range": "stddev: 0.0002464442024269779",
            "extra": "mean: 845.2169169666583 usec\nrounds: 1108"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 7676.727930118572,
            "unit": "iter/sec",
            "range": "stddev: 0.00006806096010884682",
            "extra": "mean: 130.26383233885878 usec\nrounds: 1509"
          }
        ]
      }
    ]
  }
}