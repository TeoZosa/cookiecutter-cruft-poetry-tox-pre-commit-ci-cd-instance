window.BENCHMARK_DATA = {
  "lastUpdate": 1623006585257,
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
        "date": 1623006583702,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 984.0309079865833,
            "unit": "iter/sec",
            "range": "stddev: 0.0002177984452883539",
            "extra": "mean: 1.0162282423080498 msec\nrounds: 520"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1442.6904131642764,
            "unit": "iter/sec",
            "range": "stddev: 0.00012753109054695238",
            "extra": "mean: 693.1494039713508 usec\nrounds: 1208"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 9394.621442113294,
            "unit": "iter/sec",
            "range": "stddev: 0.00002686240856061226",
            "extra": "mean: 106.44388453134445 usec\nrounds: 1810"
          }
        ]
      }
    ]
  }
}