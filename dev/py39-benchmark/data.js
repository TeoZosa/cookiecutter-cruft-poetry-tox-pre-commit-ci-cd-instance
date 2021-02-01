window.BENCHMARK_DATA = {
  "lastUpdate": 1612146907541,
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
          "id": "8a1dd8640a0346550b08a1b32f34754672ffc172",
          "message": ":sparkles: Add `icontract` benchmarks\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@f8b7975",
          "timestamp": "2021-02-01T02:29:59Z",
          "tree_id": "2a10251c9d32f99f67e46d7a51b5923abe139351",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/8a1dd8640a0346550b08a1b32f34754672ffc172"
        },
        "date": 1612146906176,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 918.2423649661366,
            "unit": "iter/sec",
            "range": "stddev: 0.00020899128640206887",
            "extra": "mean: 1.089037097560706 msec\nrounds: 451"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1307.075375500865,
            "unit": "iter/sec",
            "range": "stddev: 0.00021428762955933914",
            "extra": "mean: 765.066819208345 usec\nrounds: 1062"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 9428.208978257084,
            "unit": "iter/sec",
            "range": "stddev: 0.00002450288257491429",
            "extra": "mean: 106.06468336734531 usec\nrounds: 1497"
          }
        ]
      }
    ]
  }
}