window.BENCHMARK_DATA = {
  "lastUpdate": 1620407492766,
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
          "id": "f025e4acbc86319185258375de20b7ebf4f806f0",
          "message": ":green_heart: Add `flakehell` pre-commit hook `flake8` compatibility fix\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@30ee29c",
          "timestamp": "2021-05-07T17:07:00Z",
          "tree_id": "13683acbf94bb3e1760b740c154023682367f8bc",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/f025e4acbc86319185258375de20b7ebf4f806f0"
        },
        "date": 1620407491556,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 889.8353933429197,
            "unit": "iter/sec",
            "range": "stddev: 0.000345413173310272",
            "extra": "mean: 1.1238033545094397 msec\nrounds: 488"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1186.7775670891265,
            "unit": "iter/sec",
            "range": "stddev: 0.00023174660612201834",
            "extra": "mean: 842.617882012005 usec\nrounds: 1034"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8423.125555714974,
            "unit": "iter/sec",
            "range": "stddev: 0.00003940253827338477",
            "extra": "mean: 118.72077572457812 usec\nrounds: 1623"
          }
        ]
      }
    ]
  }
}