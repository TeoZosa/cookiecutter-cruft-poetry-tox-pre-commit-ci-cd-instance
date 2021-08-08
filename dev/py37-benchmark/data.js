window.BENCHMARK_DATA = {
  "lastUpdate": 1628455240529,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "d578f81d1ba6ea92f508b126d0cca905e2f264e4",
          "message": ":recycle: Specify project name in Typer instance instantiation\n\nUsing as single source of truth.\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@87b1ede",
          "timestamp": "2021-08-08T20:31:49Z",
          "tree_id": "2302296d71a7a406beac5ef1e26904ebd8225aba"
        },
        "date": 1628455238662,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 951.8119711436475,
            "unit": "iter/sec",
            "range": "stddev: 0.00013130251386637116",
            "extra": "mean: 1.0506276768072713 msec\nrounds: 526"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1305.5982394403065,
            "unit": "iter/sec",
            "range": "stddev: 0.00024101577476181375",
            "extra": "mean: 765.9324053842836 usec\nrounds: 1226"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8712.682862577867,
            "unit": "iter/sec",
            "range": "stddev: 0.0000607188631146396",
            "extra": "mean: 114.77520940135824 usec\nrounds: 1404"
          }
        ]
      }
    ]
  }
}