window.BENCHMARK_DATA = {
  "lastUpdate": 1620455568764,
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
          "id": "46f5287cc5181425467e383290f2f13843806ffb",
          "message": ":arrow_up: Upgrade dependencies; make `xdoctest` `[all]` package install\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@770cc4e",
          "timestamp": "2021-05-08T06:27:39Z",
          "tree_id": "7df07dfc1281a812a3dc52e0739c870c181142d7",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/46f5287cc5181425467e383290f2f13843806ffb"
        },
        "date": 1620455566988,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1074.199260924387,
            "unit": "iter/sec",
            "range": "stddev: 0.00016886740787909536",
            "extra": "mean: 930.9259802873668 usec\nrounds: 558"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1523.8270637270425,
            "unit": "iter/sec",
            "range": "stddev: 0.0001104443618874941",
            "extra": "mean: 656.2424462748132 usec\nrounds: 1154"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 9257.259041908821,
            "unit": "iter/sec",
            "range": "stddev: 0.000043382427844928206",
            "extra": "mean: 108.02333557620776 usec\nrounds: 1931"
          }
        ]
      }
    ]
  }
}