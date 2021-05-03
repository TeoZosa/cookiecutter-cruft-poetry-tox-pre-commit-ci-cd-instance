window.BENCHMARK_DATA = {
  "lastUpdate": 1620000615571,
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
          "id": "ddefea1734e7f9f8c24fe293aedb1c5459172404",
          "message": "Update `Go` version to `1.16`\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@1a85788",
          "timestamp": "2021-05-03T00:05:29Z",
          "tree_id": "0e9720781a4e3e27a434ab7909d852227429e0bf",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/ddefea1734e7f9f8c24fe293aedb1c5459172404"
        },
        "date": 1620000614223,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 893.526249492472,
            "unit": "iter/sec",
            "range": "stddev: 0.00044645274115910085",
            "extra": "mean: 1.1191613011570793 msec\nrounds: 518"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1337.421393130084,
            "unit": "iter/sec",
            "range": "stddev: 0.00016217908346618045",
            "extra": "mean: 747.7074952865923 usec\nrounds: 1167"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 9385.823958298923,
            "unit": "iter/sec",
            "range": "stddev: 0.000032158704520971706",
            "extra": "mean: 106.54365609700174 usec\nrounds: 2050"
          }
        ]
      }
    ]
  }
}