window.BENCHMARK_DATA = {
  "lastUpdate": 1624731510484,
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
          "id": "cc4b111e54f3b9195e9c80ab172e192d3bbb05dc",
          "message": ":construction_worker: :pushpin: Pin template `ahmadnassri/action-dependabot-auto-merge` version\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@fdb09b0",
          "timestamp": "2021-06-26T18:11:44Z",
          "tree_id": "c5a3a4a37eafd785b2e5fb38791cef4113f32f8a"
        },
        "date": 1624731508474,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1042.0672152077775,
            "unit": "iter/sec",
            "range": "stddev: 0.0001234439885131889",
            "extra": "mean: 959.6309963562287 usec\nrounds: 549"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1374.755794390092,
            "unit": "iter/sec",
            "range": "stddev: 0.0002719082246232543",
            "extra": "mean: 727.4019168209059 usec\nrounds: 1082"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8998.23207103606,
            "unit": "iter/sec",
            "range": "stddev: 0.000028197182355879404",
            "extra": "mean: 111.13294168293879 usec\nrounds: 1972"
          }
        ]
      }
    ]
  }
}