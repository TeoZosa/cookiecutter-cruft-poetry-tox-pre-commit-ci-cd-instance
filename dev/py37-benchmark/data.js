window.BENCHMARK_DATA = {
  "lastUpdate": 1629249353496,
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
        "date": 1629249351820,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 355.1178220095211,
            "unit": "iter/sec",
            "range": "stddev: 0.0000235043677458565",
            "extra": "mean: 2.8159668088220844 msec\nrounds: 136"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1034.0899180333176,
            "unit": "iter/sec",
            "range": "stddev: 0.000013418985216631995",
            "extra": "mean: 967.0338938240965 usec\nrounds: 923"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2146.268057219557,
            "unit": "iter/sec",
            "range": "stddev: 0.000010625494788470892",
            "extra": "mean: 465.9250258308732 usec\nrounds: 813"
          }
        ]
      }
    ]
  }
}