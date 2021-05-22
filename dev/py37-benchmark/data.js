window.BENCHMARK_DATA = {
  "lastUpdate": 1621709978873,
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
          "id": "025e016fc528333f665aab6a60d4e39396c7fe19",
          "message": ":memo: :cookie: Add new feature documentation\n\nSee Also:\n    - #168\n    - #172\n    - #173\n    - #175\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@608cd89",
          "timestamp": "2021-05-22T18:52:40Z",
          "tree_id": "7732d3ddd317f806b529bfb054dd197afedef9f7",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/025e016fc528333f665aab6a60d4e39396c7fe19"
        },
        "date": 1621709977670,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 983.4285901661682,
            "unit": "iter/sec",
            "range": "stddev: 0.00016083143776597064",
            "extra": "mean: 1.0168506488417546 msec\nrounds: 561"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1308.1781918973218,
            "unit": "iter/sec",
            "range": "stddev: 0.00023085016484912125",
            "extra": "mean: 764.4218549077369 usec\nrounds: 1406"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8600.359934552656,
            "unit": "iter/sec",
            "range": "stddev: 0.00006600275234463296",
            "extra": "mean: 116.27420336007302 usec\nrounds: 1667"
          }
        ]
      }
    ]
  }
}