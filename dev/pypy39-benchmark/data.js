window.BENCHMARK_DATA = {
  "lastUpdate": 1612144811261,
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
          "id": "e58275fe6ef1e905c5217f71100e6b9f5870366a",
          "message": ":alembic: Test `test-performance` CI test job\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@a737126",
          "timestamp": "2021-02-01T01:55:14Z",
          "tree_id": "30fe75947b64c9b080d8be4ecefd0dd43b321e66",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/e58275fe6ef1e905c5217f71100e6b9f5870366a"
        },
        "date": 1612144808807,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 910.6172956854052,
            "unit": "iter/sec",
            "range": "stddev: 0.00014595547091408555",
            "extra": "mean: 1.0981561680610492 msec\nrounds: 476"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1298.1740264770056,
            "unit": "iter/sec",
            "range": "stddev: 0.00014880177744551506",
            "extra": "mean: 770.312746676813 usec\nrounds: 1204"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 9290.482524801948,
            "unit": "iter/sec",
            "range": "stddev: 0.00001926111441369668",
            "extra": "mean: 107.63703578693485 usec\nrounds: 1481"
          }
        ]
      }
    ]
  }
}