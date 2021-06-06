window.BENCHMARK_DATA = {
  "lastUpdate": 1623006527200,
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
        "date": 1623006525643,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1245.0336482061202,
            "unit": "iter/sec",
            "range": "stddev: 0.000017451516724830716",
            "extra": "mean: 803.1911438223605 usec\nrounds: 591"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1834.0597761023496,
            "unit": "iter/sec",
            "range": "stddev: 0.00001657405347838937",
            "extra": "mean: 545.2384993280584 usec\nrounds: 1488"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 14555.08392041742,
            "unit": "iter/sec",
            "range": "stddev: 0.000004557747483435764",
            "extra": "mean: 68.7045162685205 usec\nrounds: 1844"
          }
        ]
      }
    ]
  }
}