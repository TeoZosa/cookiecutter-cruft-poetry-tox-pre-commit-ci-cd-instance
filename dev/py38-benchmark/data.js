window.BENCHMARK_DATA = {
  "lastUpdate": 1621819086229,
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
        "date": 1621819084784,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 916.0088990436547,
            "unit": "iter/sec",
            "range": "stddev: 0.00019600538232126277",
            "extra": "mean: 1.091692450852863 msec\nrounds: 468"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1343.1406680272128,
            "unit": "iter/sec",
            "range": "stddev: 0.000164180360229735",
            "extra": "mean: 744.5236554923073 usec\nrounds: 1193"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 7952.431891019562,
            "unit": "iter/sec",
            "range": "stddev: 0.00004154200572591678",
            "extra": "mean: 125.74769752247354 usec\nrounds: 1372"
          }
        ]
      }
    ]
  }
}