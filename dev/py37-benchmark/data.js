window.BENCHMARK_DATA = {
  "lastUpdate": 1622046316948,
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
        "date": 1622046315284,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 999.2223031249591,
            "unit": "iter/sec",
            "range": "stddev: 0.00002148070094239304",
            "extra": "mean: 1.0007783021581973 msec\nrounds: 417"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1434.2533732211555,
            "unit": "iter/sec",
            "range": "stddev: 0.000021966538204922994",
            "extra": "mean: 697.226876834268 usec\nrounds: 1226"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 11102.686551325949,
            "unit": "iter/sec",
            "range": "stddev: 0.000007865203087764413",
            "extra": "mean: 90.0682907129873 usec\nrounds: 1314"
          }
        ]
      }
    ]
  }
}