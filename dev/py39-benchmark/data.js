window.BENCHMARK_DATA = {
  "lastUpdate": 1629249423942,
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
        "date": 1629249421169,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 317.96621540836856,
            "unit": "iter/sec",
            "range": "stddev: 0.00003630219446747836",
            "extra": "mean: 3.144988214284608 msec\nrounds: 126"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 906.8385070743024,
            "unit": "iter/sec",
            "range": "stddev: 0.000017484073350322615",
            "extra": "mean: 1.1027321757941895 msec\nrounds: 785"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1943.8754781065247,
            "unit": "iter/sec",
            "range": "stddev: 0.00005714843274732951",
            "extra": "mean: 514.4362441230403 usec\nrounds: 766"
          }
        ]
      }
    ]
  }
}