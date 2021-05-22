window.BENCHMARK_DATA = {
  "lastUpdate": 1621652243026,
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
          "id": "5f71d3ec5162356f79bf5dff1522c86e44265db5",
          "message": ":boom: Enforce type annotations across codebase\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@d36318a",
          "timestamp": "2021-05-22T02:50:35Z",
          "tree_id": "5954f229c68d49ece82eac8d3482b3cc9c1444a4",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/5f71d3ec5162356f79bf5dff1522c86e44265db5"
        },
        "date": 1621652241617,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1021.4009174353422,
            "unit": "iter/sec",
            "range": "stddev: 0.0001611338415124398",
            "extra": "mean: 979.0474855954916 usec\nrounds: 486"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1425.034299780006,
            "unit": "iter/sec",
            "range": "stddev: 0.00012220013530512053",
            "extra": "mean: 701.7374951286281 usec\nrounds: 1232"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 9372.369701397707,
            "unit": "iter/sec",
            "range": "stddev: 0.000045615777876812906",
            "extra": "mean: 106.69660201847026 usec\nrounds: 1882"
          }
        ]
      }
    ]
  }
}