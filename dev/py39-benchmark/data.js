window.BENCHMARK_DATA = {
  "lastUpdate": 1621723902062,
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
          "id": "ed1c67a0d032f27f656085547664f3ce8a85567b",
          "message": ":memo: :cookie: Add \"Monitoring and Observability\" documentation section\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@8d34de3",
          "timestamp": "2021-05-22T22:44:44Z",
          "tree_id": "34a154c5fc149895d143b9aef77d5af3eac475c8",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/ed1c67a0d032f27f656085547664f3ce8a85567b"
        },
        "date": 1621723900488,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 987.6410453380865,
            "unit": "iter/sec",
            "range": "stddev: 0.0001491449601966995",
            "extra": "mean: 1.0125136097980647 msec\nrounds: 551"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1365.0974691561398,
            "unit": "iter/sec",
            "range": "stddev: 0.00012616629578844773",
            "extra": "mean: 732.5484242661211 usec\nrounds: 1294"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 9253.389368592556,
            "unit": "iter/sec",
            "range": "stddev: 0.00004198431794245707",
            "extra": "mean: 108.06850983642336 usec\nrounds: 1779"
          }
        ]
      }
    ]
  }
}