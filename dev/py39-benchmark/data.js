window.BENCHMARK_DATA = {
  "lastUpdate": 1622046275118,
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
          "id": "0a815a2ed727346a91f85f8860d94c1b39bfc5f7",
          "message": ":construction_worker: Enable automated Dockerfile dependency updates\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@a218514",
          "timestamp": "2021-05-26T16:17:34Z",
          "tree_id": "4da4f34a2a4f8ad2a611c84526ffc7559fcba7b9",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/0a815a2ed727346a91f85f8860d94c1b39bfc5f7"
        },
        "date": 1622046273466,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1102.8848919755815,
            "unit": "iter/sec",
            "range": "stddev: 0.0000427767666467112",
            "extra": "mean: 906.7129373843491 usec\nrounds: 543"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1628.1988243052094,
            "unit": "iter/sec",
            "range": "stddev: 0.00002780768378496314",
            "extra": "mean: 614.1756062418995 usec\nrounds: 1346"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13177.482756555597,
            "unit": "iter/sec",
            "range": "stddev: 0.000007041799863898679",
            "extra": "mean: 75.88702777869432 usec\nrounds: 1800"
          }
        ]
      }
    ]
  }
}