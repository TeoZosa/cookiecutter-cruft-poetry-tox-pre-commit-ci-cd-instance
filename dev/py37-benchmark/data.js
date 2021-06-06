window.BENCHMARK_DATA = {
  "lastUpdate": 1623006626869,
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
          "id": "915596fecdabd94de8734d7dab7959a03543bc75",
          "message": ":green_heart: Re-enable `log4brains`\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@e8dd2b7",
          "timestamp": "2021-06-06T19:02:51Z",
          "tree_id": "101a164979867358d394add812c14cf1cf760b68",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/915596fecdabd94de8734d7dab7959a03543bc75"
        },
        "date": 1623006624254,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1002.6893838870067,
            "unit": "iter/sec",
            "range": "stddev: 0.00001950487909509055",
            "extra": "mean: 997.3178294991206 usec\nrounds: 522"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1410.0471154897257,
            "unit": "iter/sec",
            "range": "stddev: 0.000027488808757711472",
            "extra": "mean: 709.1961601954615 usec\nrounds: 1236"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 10637.747571748056,
            "unit": "iter/sec",
            "range": "stddev: 0.000046574633938248885",
            "extra": "mean: 94.00486270757355 usec\nrounds: 1566"
          }
        ]
      }
    ]
  }
}