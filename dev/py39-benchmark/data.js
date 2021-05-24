window.BENCHMARK_DATA = {
  "lastUpdate": 1621819025935,
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
        "date": 1621819024540,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1140.8327323622632,
            "unit": "iter/sec",
            "range": "stddev: 0.00004480414578012008",
            "extra": "mean: 876.5526896562232 usec\nrounds: 580"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1657.9084123157281,
            "unit": "iter/sec",
            "range": "stddev: 0.00003467291867071264",
            "extra": "mean: 603.169627810274 usec\nrounds: 1424"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13574.552586332939,
            "unit": "iter/sec",
            "range": "stddev: 0.000007211071396507362",
            "extra": "mean: 73.66725301921295 usec\nrounds: 1822"
          }
        ]
      }
    ]
  }
}