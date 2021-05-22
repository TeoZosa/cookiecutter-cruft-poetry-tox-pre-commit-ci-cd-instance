window.BENCHMARK_DATA = {
  "lastUpdate": 1621718371637,
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
          "id": "63b2fa2818582da447a44e161e578ff5d81d4e39",
          "message": ":art: :construction_worker: Improve \"Install Package\" step structure\n\nAlso fixes `yamllint` line length errors for test instance.\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@01e68bc",
          "timestamp": "2021-05-22T21:13:48Z",
          "tree_id": "da46dbc45159aa40ac43da419b4856e15c37755e",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/63b2fa2818582da447a44e161e578ff5d81d4e39"
        },
        "date": 1621718370431,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1240.0175632508506,
            "unit": "iter/sec",
            "range": "stddev: 0.00008803092336454438",
            "extra": "mean: 806.4401905553527 usec\nrounds: 572"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1861.401775388729,
            "unit": "iter/sec",
            "range": "stddev: 0.00006888374670174858",
            "extra": "mean: 537.2295294986293 usec\nrounds: 1407"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13732.416436294443,
            "unit": "iter/sec",
            "range": "stddev: 0.000011008286848807088",
            "extra": "mean: 72.82039578679134 usec\nrounds: 1948"
          }
        ]
      }
    ]
  }
}