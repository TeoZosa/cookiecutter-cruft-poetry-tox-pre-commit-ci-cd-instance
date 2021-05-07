window.BENCHMARK_DATA = {
  "lastUpdate": 1620408519692,
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
          "id": "4c9d8ba5244dc94fec2186d1bb1ac3f857e913d4",
          "message": ":recycle: `pyupgrade` auto-fix for `subprocess.run()`\n\nsee: https://docs.python.org/3/library/subprocess.html\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@098e42e",
          "timestamp": "2021-05-07T17:24:16Z",
          "tree_id": "0b54f295bcbc5e47eeb5c233a3a7e58b67013764",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/4c9d8ba5244dc94fec2186d1bb1ac3f857e913d4"
        },
        "date": 1620408518474,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 884.9853210490393,
            "unit": "iter/sec",
            "range": "stddev: 0.00036242195776655485",
            "extra": "mean: 1.1299622448139877 msec\nrounds: 482"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1211.6840504603733,
            "unit": "iter/sec",
            "range": "stddev: 0.00030183544726115647",
            "extra": "mean: 825.2976505055545 usec\nrounds: 990"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8270.190201547533,
            "unit": "iter/sec",
            "range": "stddev: 0.000029409197867268183",
            "extra": "mean: 120.91620333143949 usec\nrounds: 1441"
          }
        ]
      }
    ]
  }
}