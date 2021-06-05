window.BENCHMARK_DATA = {
  "lastUpdate": 1622862162251,
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
          "id": "2fb205534257b4bc9d120592c3f6b22d0c373f56",
          "message": ":memo: Update section title\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@960c4bb",
          "timestamp": "2021-06-05T02:56:34Z",
          "tree_id": "5d8cc0a145c0c7c2a0726820633b0ba7fc7f6616",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/2fb205534257b4bc9d120592c3f6b22d0c373f56"
        },
        "date": 1622862160231,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1218.5321466140645,
            "unit": "iter/sec",
            "range": "stddev: 0.00001561386598702159",
            "extra": "mean: 820.659514628892 usec\nrounds: 581"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1727.9351118255856,
            "unit": "iter/sec",
            "range": "stddev: 0.000017893942467752925",
            "extra": "mean: 578.7254354380744 usec\nrounds: 1394"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13471.614144727715,
            "unit": "iter/sec",
            "range": "stddev: 0.000005066227716738357",
            "extra": "mean: 74.23015454991803 usec\nrounds: 1747"
          }
        ]
      }
    ]
  }
}