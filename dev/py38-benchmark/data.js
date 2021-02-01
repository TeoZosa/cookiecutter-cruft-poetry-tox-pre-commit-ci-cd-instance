window.BENCHMARK_DATA = {
  "lastUpdate": 1612146535882,
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
          "id": "09d8c69047b1b8dab3f9848e8c46fffe7e85e6e7",
          "message": ":alembic: Test `test-performance` CI test job\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@787cddd",
          "timestamp": "2021-02-01T02:23:54Z",
          "tree_id": "8c066438f09529427b981561e44b9046f2203b37",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/09d8c69047b1b8dab3f9848e8c46fffe7e85e6e7"
        },
        "date": 1612146533518,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 942.026584595701,
            "unit": "iter/sec",
            "range": "stddev: 0.00022126125104662242",
            "extra": "mean: 1.0615411670459174 msec\nrounds: 437"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1340.7169539973395,
            "unit": "iter/sec",
            "range": "stddev: 0.00022057693656199644",
            "extra": "mean: 745.8695864317267 usec\nrounds: 1371"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 9142.74176741155,
            "unit": "iter/sec",
            "range": "stddev: 0.00005469938737144941",
            "extra": "mean: 109.37638024125395 usec\nrounds: 1741"
          }
        ]
      }
    ]
  }
}