window.BENCHMARK_DATA = {
  "lastUpdate": 1612146505663,
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
        "date": 1612146504605,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 958.3381975626378,
            "unit": "iter/sec",
            "range": "stddev: 0.0003033693770267254",
            "extra": "mean: 1.043472964495542 msec\nrounds: 507"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1415.7082543527142,
            "unit": "iter/sec",
            "range": "stddev: 0.00020497384265241917",
            "extra": "mean: 706.3602242378794 usec\nrounds: 1213"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 9545.451666050527,
            "unit": "iter/sec",
            "range": "stddev: 0.00006211710124946671",
            "extra": "mean: 104.76193636353663 usec\nrounds: 1650"
          }
        ]
      }
    ]
  }
}