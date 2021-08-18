window.BENCHMARK_DATA = {
  "lastUpdate": 1629249388292,
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
          "id": "71f7162bea2053eb084fccc6762a6d6fd69b7c71",
          "message": ":wrench: Conditionally render Jupyter-specific dependency\n\nSigned-off-by: Teo Zosa <teofilo@sonosim.com>\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@f612eea",
          "timestamp": "2021-08-18T01:08:01Z",
          "tree_id": "310dbf311146f5737e94f01acb865672a4709945"
        },
        "date": 1629249386140,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 329.26826425874873,
            "unit": "iter/sec",
            "range": "stddev: 0.00014499743250772715",
            "extra": "mean: 3.037037299210137 msec\nrounds: 127"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 949.7324151012199,
            "unit": "iter/sec",
            "range": "stddev: 0.00005693234490177148",
            "extra": "mean: 1.052928155446208 msec\nrounds: 817"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1968.8983379984834,
            "unit": "iter/sec",
            "range": "stddev: 0.00003412470115320242",
            "extra": "mean: 507.8982396910177 usec\nrounds: 776"
          }
        ]
      }
    ]
  }
}