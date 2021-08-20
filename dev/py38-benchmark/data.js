window.BENCHMARK_DATA = {
  "lastUpdate": 1629486124993,
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
        "date": 1629486121694,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 271.12980470873634,
            "unit": "iter/sec",
            "range": "stddev: 0.0006763280443515231",
            "extra": "mean: 3.6882702773096416 msec\nrounds: 119"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 834.8256832537453,
            "unit": "iter/sec",
            "range": "stddev: 0.00015768962398662482",
            "extra": "mean: 1.1978548576781747 msec\nrounds: 801"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1649.1686993786054,
            "unit": "iter/sec",
            "range": "stddev: 0.00010539670096253913",
            "extra": "mean: 606.3661045572794 usec\nrounds: 746"
          }
        ]
      }
    ]
  }
}