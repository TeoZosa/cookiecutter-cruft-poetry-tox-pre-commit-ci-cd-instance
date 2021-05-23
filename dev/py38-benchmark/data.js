window.BENCHMARK_DATA = {
  "lastUpdate": 1621791706432,
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
          "id": "451d5ecdff0bd6b5559471f172c0d0607a59e370",
          "message": ":memo: :bulb: Update Poetry install hint message\n\nNewer Poetry versions use a new default install directory.\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@b91c3da",
          "timestamp": "2021-05-23T17:35:31Z",
          "tree_id": "f239ed1817a53284fb1190c314bdafbde6592939",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/451d5ecdff0bd6b5559471f172c0d0607a59e370"
        },
        "date": 1621791705186,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1082.2394314618957,
            "unit": "iter/sec",
            "range": "stddev: 0.00003066225430432498",
            "extra": "mean: 924.0099472712742 usec\nrounds: 550"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1585.965420798504,
            "unit": "iter/sec",
            "range": "stddev: 0.00002001616296123029",
            "extra": "mean: 630.5307712803212 usec\nrounds: 1351"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 11649.530629198616,
            "unit": "iter/sec",
            "range": "stddev: 0.00000769756581501451",
            "extra": "mean: 85.84036832295888 usec\nrounds: 1629"
          }
        ]
      }
    ]
  }
}