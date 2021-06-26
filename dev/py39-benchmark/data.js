window.BENCHMARK_DATA = {
  "lastUpdate": 1624731579793,
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
        "date": 1624731577626,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1061.8967789940348,
            "unit": "iter/sec",
            "range": "stddev: 0.00017802962835944858",
            "extra": "mean: 941.71111522471 usec\nrounds: 486"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1575.5417055492185,
            "unit": "iter/sec",
            "range": "stddev: 0.0001621497263982528",
            "extra": "mean: 634.7023353795702 usec\nrounds: 1303"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13009.070694343307,
            "unit": "iter/sec",
            "range": "stddev: 0.000030342985394771665",
            "extra": "mean: 76.86944159930094 usec\nrounds: 1798"
          }
        ]
      }
    ]
  }
}