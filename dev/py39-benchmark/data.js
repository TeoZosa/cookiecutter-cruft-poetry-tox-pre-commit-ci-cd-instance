window.BENCHMARK_DATA = {
  "lastUpdate": 1612200083711,
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
          "id": "90fd30cc5e53bb2f45199ae51ad7c87a2fb826ea",
          "message": ":sparkles: Add `icontract` benchmarks\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@641456d",
          "timestamp": "2021-02-01T17:17:03Z",
          "tree_id": "c0cb7a8b060842246b63e5d3a91fca67fe6c5b57",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/90fd30cc5e53bb2f45199ae51ad7c87a2fb826ea"
        },
        "date": 1612200082895,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1071.665545053376,
            "unit": "iter/sec",
            "range": "stddev: 0.000019198179603723842",
            "extra": "mean: 933.1269486229432 usec\nrounds: 545"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1570.4137068908385,
            "unit": "iter/sec",
            "range": "stddev: 0.00001998809851360541",
            "extra": "mean: 636.7748801555203 usec\nrounds: 1285"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13235.608074014164,
            "unit": "iter/sec",
            "range": "stddev: 0.000004616484509493773",
            "extra": "mean: 75.55376333357344 usec\nrounds: 1800"
          }
        ]
      }
    ]
  }
}