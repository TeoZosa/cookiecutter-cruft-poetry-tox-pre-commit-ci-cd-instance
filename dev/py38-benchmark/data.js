window.BENCHMARK_DATA = {
  "lastUpdate": 1622862186371,
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
          "id": "2fb205534257b4bc9d120592c3f6b22d0c373f56",
          "message": ":memo: Update section title\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@960c4bb",
          "timestamp": "2021-06-05T02:56:34Z",
          "tree_id": "5d8cc0a145c0c7c2a0726820633b0ba7fc7f6616",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/2fb205534257b4bc9d120592c3f6b22d0c373f56"
        },
        "date": 1622862184294,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1110.821085905076,
            "unit": "iter/sec",
            "range": "stddev: 0.000045708969008741815",
            "extra": "mean: 900.2349817524564 usec\nrounds: 548"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1636.755421914764,
            "unit": "iter/sec",
            "range": "stddev: 0.00003392104933871704",
            "extra": "mean: 610.964831159775 usec\nrounds: 1380"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 11897.57486966327,
            "unit": "iter/sec",
            "range": "stddev: 0.00000782507098467287",
            "extra": "mean: 84.05074235337024 usec\nrounds: 1700"
          }
        ]
      }
    ]
  }
}