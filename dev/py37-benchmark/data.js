window.BENCHMARK_DATA = {
  "lastUpdate": 1631122072350,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "3f3febe98748c27bdf9f94c8e2a0308d616bfa93",
          "message": ":cookie: :memo: Remove redundant qualifiers for CI/CD tools\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@c7e30fc",
          "timestamp": "2021-09-08T17:18:31Z",
          "tree_id": "81eb59eebeb15e4c4941ad57d458f0968f8eee9b"
        },
        "date": 1631122069784,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 274.63860763348174,
            "unit": "iter/sec",
            "range": "stddev: 0.0002915919419377181",
            "extra": "mean: 3.6411486666672426 msec\nrounds: 111"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 799.453567273329,
            "unit": "iter/sec",
            "range": "stddev: 0.0003709504877560896",
            "extra": "mean: 1.2508543847151352 msec\nrounds: 785"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1560.6674901057688,
            "unit": "iter/sec",
            "range": "stddev: 0.00023311411547044482",
            "extra": "mean: 640.7514773901188 usec\nrounds: 752"
          }
        ]
      }
    ]
  }
}