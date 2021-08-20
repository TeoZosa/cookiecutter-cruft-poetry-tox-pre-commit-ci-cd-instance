window.BENCHMARK_DATA = {
  "lastUpdate": 1629486119195,
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
        "date": 1629486116391,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 300.43090852189545,
            "unit": "iter/sec",
            "range": "stddev: 0.00047811351512927296",
            "extra": "mean: 3.328552328120793 msec\nrounds: 128"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 867.2712954688565,
            "unit": "iter/sec",
            "range": "stddev: 0.00024807425233800177",
            "extra": "mean: 1.1530417358727283 msec\nrounds: 761"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1837.0893749141312,
            "unit": "iter/sec",
            "range": "stddev: 0.00009113151562257923",
            "extra": "mean: 544.3393302771358 usec\nrounds: 763"
          }
        ]
      }
    ]
  }
}