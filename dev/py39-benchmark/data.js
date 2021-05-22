window.BENCHMARK_DATA = {
  "lastUpdate": 1621718394154,
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
        "date": 1621718392950,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1074.5826148142926,
            "unit": "iter/sec",
            "range": "stddev: 0.00011272677226662202",
            "extra": "mean: 930.5938754395521 usec\nrounds: 562"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1494.6057060658943,
            "unit": "iter/sec",
            "range": "stddev: 0.00010424669996510478",
            "extra": "mean: 669.0727835050242 usec\nrounds: 1261"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 10002.575862379568,
            "unit": "iter/sec",
            "range": "stddev: 0.000027541721540706438",
            "extra": "mean: 99.97424800956266 usec\nrounds: 1758"
          }
        ]
      }
    ]
  }
}