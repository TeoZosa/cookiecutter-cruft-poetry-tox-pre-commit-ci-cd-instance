window.BENCHMARK_DATA = {
  "lastUpdate": 1622046719039,
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
          "id": "34f95a8173789e00f000f222cf25e77a417a0a11",
          "message": ":construction_worker: Add explicit upper limit for `docs` dependency update PRs\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@328aa9c",
          "timestamp": "2021-05-26T16:25:15Z",
          "tree_id": "4da4f34a2a4f8ad2a611c84526ffc7559fcba7b9",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/34f95a8173789e00f000f222cf25e77a417a0a11"
        },
        "date": 1622046717317,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1048.7750633063686,
            "unit": "iter/sec",
            "range": "stddev: 0.000026482086046535885",
            "extra": "mean: 953.4933037475164 usec\nrounds: 507"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1551.384897060846,
            "unit": "iter/sec",
            "range": "stddev: 0.000023587918266530342",
            "extra": "mean: 644.5853649178457 usec\nrounds: 1277"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 11891.963311186391,
            "unit": "iter/sec",
            "range": "stddev: 0.000025459671107664152",
            "extra": "mean: 84.09040406804249 usec\nrounds: 1131"
          }
        ]
      }
    ]
  }
}