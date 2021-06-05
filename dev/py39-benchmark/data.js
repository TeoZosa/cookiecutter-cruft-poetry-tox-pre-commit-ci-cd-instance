window.BENCHMARK_DATA = {
  "lastUpdate": 1622862226688,
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
        "date": 1622862224480,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 937.8203975486737,
            "unit": "iter/sec",
            "range": "stddev: 0.00023095894301032328",
            "extra": "mean: 1.0663022499978192 msec\nrounds: 512"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1317.0279666383267,
            "unit": "iter/sec",
            "range": "stddev: 0.00023806845820239012",
            "extra": "mean: 759.2853191663569 usec\nrounds: 1200"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 9263.009651763223,
            "unit": "iter/sec",
            "range": "stddev: 0.00003925653161234065",
            "extra": "mean: 107.95627313306846 usec\nrounds: 1794"
          }
        ]
      }
    ]
  }
}