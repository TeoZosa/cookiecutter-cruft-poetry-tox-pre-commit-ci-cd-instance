window.BENCHMARK_DATA = {
  "lastUpdate": 1621819093741,
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
          "id": "8d96777c952f561dc0a1b266a24655c45efc8036",
          "message": ":bookmark: Bump version number to `0.3.0`\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@c1417b7",
          "timestamp": "2021-05-24T01:10:59Z",
          "tree_id": "ee7a217c63a01badf2dc998d57d51b8ad47ea972",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/8d96777c952f561dc0a1b266a24655c45efc8036"
        },
        "date": 1621819091727,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 940.2074120804849,
            "unit": "iter/sec",
            "range": "stddev: 0.00013679483644925904",
            "extra": "mean: 1.063595103751848 msec\nrounds: 453"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1288.408556277372,
            "unit": "iter/sec",
            "range": "stddev: 0.0001567265663354644",
            "extra": "mean: 776.1513187162639 usec\nrounds: 1277"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8361.675443369995,
            "unit": "iter/sec",
            "range": "stddev: 0.000026132664102162463",
            "extra": "mean: 119.59325697015709 usec\nrounds: 1829"
          }
        ]
      }
    ]
  }
}