window.BENCHMARK_DATA = {
  "lastUpdate": 1620408490783,
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
          "id": "4c9d8ba5244dc94fec2186d1bb1ac3f857e913d4",
          "message": ":recycle: `pyupgrade` auto-fix for `subprocess.run()`\n\nsee: https://docs.python.org/3/library/subprocess.html\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@098e42e",
          "timestamp": "2021-05-07T17:24:16Z",
          "tree_id": "0b54f295bcbc5e47eeb5c233a3a7e58b67013764",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/4c9d8ba5244dc94fec2186d1bb1ac3f857e913d4"
        },
        "date": 1620408489577,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1109.2940811984674,
            "unit": "iter/sec",
            "range": "stddev: 0.000023640041344237737",
            "extra": "mean: 901.4742050364251 usec\nrounds: 556"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1626.6023214062484,
            "unit": "iter/sec",
            "range": "stddev: 0.00002367346069834394",
            "extra": "mean: 614.7784168508186 usec\nrounds: 1365"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 11821.743181165184,
            "unit": "iter/sec",
            "range": "stddev: 0.000006681428804544028",
            "extra": "mean: 84.58989378091339 usec\nrounds: 1817"
          }
        ]
      }
    ]
  }
}