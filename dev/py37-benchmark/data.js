window.BENCHMARK_DATA = {
  "lastUpdate": 1629486146518,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "4ebb6c86baab26574cf0fd3d861f3acb2dc62858",
          "message": ":art: Move `strong-version-tag*` targets to top of section\n\nSigned-off-by: Teo Zosa <teofilo@sonosim.com>\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@58a93aa",
          "timestamp": "2021-08-20T18:50:19Z",
          "tree_id": "2dccc2e2e636d0c177d5ebbf22121a61a1d38a41"
        },
        "date": 1629486143740,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 266.1834137446038,
            "unit": "iter/sec",
            "range": "stddev: 0.000319278034577749",
            "extra": "mean: 3.7568080818118688 msec\nrounds: 110"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 766.8680478384043,
            "unit": "iter/sec",
            "range": "stddev: 0.00016765378246066465",
            "extra": "mean: 1.3040053015883661 msec\nrounds: 693"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1625.1030504881085,
            "unit": "iter/sec",
            "range": "stddev: 0.00009986666735203687",
            "extra": "mean: 615.3455928223411 usec\nrounds: 808"
          }
        ]
      }
    ]
  }
}