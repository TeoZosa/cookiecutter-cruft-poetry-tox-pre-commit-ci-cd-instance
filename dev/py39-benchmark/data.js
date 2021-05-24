window.BENCHMARK_DATA = {
  "lastUpdate": 1621816410541,
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
          "id": "64228b3bb885f15548453b6a3b16adde285ac82f",
          "message": ":memo: :cookie: Note required repository secrets for related features\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@9ac75a6",
          "timestamp": "2021-05-24T00:26:57Z",
          "tree_id": "7d84d351de185978855569b3b9994649b08403cc",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/64228b3bb885f15548453b6a3b16adde285ac82f"
        },
        "date": 1621816409165,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1081.6822741307521,
            "unit": "iter/sec",
            "range": "stddev: 0.00004154102465181839",
            "extra": "mean: 924.485890095229 usec\nrounds: 555"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1591.7374490173963,
            "unit": "iter/sec",
            "range": "stddev: 0.00003570217040552873",
            "extra": "mean: 628.2443129156226 usec\nrounds: 1355"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 12816.19744641871,
            "unit": "iter/sec",
            "range": "stddev: 0.000005468935988620503",
            "extra": "mean: 78.0262635762868 usec\nrounds: 1749"
          }
        ]
      }
    ]
  }
}