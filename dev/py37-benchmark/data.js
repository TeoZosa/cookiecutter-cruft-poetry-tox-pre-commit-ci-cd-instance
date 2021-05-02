window.BENCHMARK_DATA = {
  "lastUpdate": 1619996311469,
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
          "id": "ae7479820be70f00a5aa6eaf5830ac8060af7e3b",
          "message": ":construction_worker: Update RTD Python version to `3.9`\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@738e082",
          "timestamp": "2021-05-02T22:53:44Z",
          "tree_id": "8362d3c6070c633ca067c091cac9f84bdbf6bf76",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/ae7479820be70f00a5aa6eaf5830ac8060af7e3b"
        },
        "date": 1619996308482,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 948.5230783229711,
            "unit": "iter/sec",
            "range": "stddev: 0.00022946816757787454",
            "extra": "mean: 1.0542706053795152 msec\nrounds: 446"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1231.7053508509894,
            "unit": "iter/sec",
            "range": "stddev: 0.0003843764502328878",
            "extra": "mean: 811.8824841583229 usec\nrounds: 789"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8712.135907360138,
            "unit": "iter/sec",
            "range": "stddev: 0.00010622397612604112",
            "extra": "mean: 114.7824150855114 usec\nrounds: 1949"
          }
        ]
      }
    ]
  }
}