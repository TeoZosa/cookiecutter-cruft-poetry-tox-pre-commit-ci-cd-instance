window.BENCHMARK_DATA = {
  "lastUpdate": 1621816390784,
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
        "date": 1621816388931,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1174.7356820270525,
            "unit": "iter/sec",
            "range": "stddev: 0.00008584595106222801",
            "extra": "mean: 851.2553209199033 usec\nrounds: 564"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1637.1242247797086,
            "unit": "iter/sec",
            "range": "stddev: 0.00008247822601975866",
            "extra": "mean: 610.8271961674503 usec\nrounds: 1565"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 10353.62868895923,
            "unit": "iter/sec",
            "range": "stddev: 0.000019153538509098924",
            "extra": "mean: 96.5844951602685 usec\nrounds: 2066"
          }
        ]
      }
    ]
  }
}