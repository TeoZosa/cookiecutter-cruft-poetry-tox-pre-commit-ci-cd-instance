window.BENCHMARK_DATA = {
  "lastUpdate": 1622002897346,
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
          "id": "af0ea896e7970e91bfc363dab7682382184363db",
          "message": ":construction_worker: Update test instance template initialization parameters\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@727b8dd",
          "timestamp": "2021-05-26T04:14:31Z",
          "tree_id": "7abf17b0ea810c60a015d368e7d1ddd9ad6fbdf3",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/af0ea896e7970e91bfc363dab7682382184363db"
        },
        "date": 1622002895261,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 905.2825424268606,
            "unit": "iter/sec",
            "range": "stddev: 0.00012085707990559664",
            "extra": "mean: 1.1046275092406213 msec\nrounds: 487"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1279.809539884871,
            "unit": "iter/sec",
            "range": "stddev: 0.00008253738389890094",
            "extra": "mean: 781.3662649287315 usec\nrounds: 1189"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8791.45652630177,
            "unit": "iter/sec",
            "range": "stddev: 0.000024139919527036345",
            "extra": "mean: 113.74679463047539 usec\nrounds: 1490"
          }
        ]
      }
    ]
  }
}