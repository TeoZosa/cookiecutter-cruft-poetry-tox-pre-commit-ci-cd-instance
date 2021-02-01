window.BENCHMARK_DATA = {
  "lastUpdate": 1612143553920,
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
          "id": "621699ff50def9527a8c55be3de7bb63db6912df",
          "message": ":alembic: Test `test-performance` CI test job\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@6d9ddf3",
          "timestamp": "2021-02-01T01:34:49Z",
          "tree_id": "4e702d7c7f75b07a40a2c10a0f3b01e33950e7ec",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/621699ff50def9527a8c55be3de7bb63db6912df"
        },
        "date": 1612143552629,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1088.1478933570934,
            "unit": "iter/sec",
            "range": "stddev: 0.00004638640314707868",
            "extra": "mean: 918.9927270959977 usec\nrounds: 513"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1538.402180574086,
            "unit": "iter/sec",
            "range": "stddev: 0.000028367180730598362",
            "extra": "mean: 650.0250796750884 usec\nrounds: 1230"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 12334.200617489361,
            "unit": "iter/sec",
            "range": "stddev: 0.000007043071782151582",
            "extra": "mean: 81.07537983305083 usec\nrounds: 1914"
          }
        ]
      }
    ]
  }
}