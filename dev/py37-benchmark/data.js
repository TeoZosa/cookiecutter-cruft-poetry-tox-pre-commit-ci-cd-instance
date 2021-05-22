window.BENCHMARK_DATA = {
  "lastUpdate": 1621723899299,
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
        "date": 1621723898233,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1029.6754187498022,
            "unit": "iter/sec",
            "range": "stddev: 0.000016733281578325344",
            "extra": "mean: 971.1798318096852 usec\nrounds: 547"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1458.0884571942493,
            "unit": "iter/sec",
            "range": "stddev: 0.000021366764400434055",
            "extra": "mean: 685.8294468116608 usec\nrounds: 1269"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 11185.217234355454,
            "unit": "iter/sec",
            "range": "stddev: 0.000005628958251908852",
            "extra": "mean: 89.40371733939102 usec\nrounds: 1638"
          }
        ]
      }
    ]
  }
}