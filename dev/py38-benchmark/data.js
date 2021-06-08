window.BENCHMARK_DATA = {
  "lastUpdate": 1623173740492,
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
          "id": "0d5d8a03249bd17cd718c24aa16c9336de5e12e1",
          "message": ":memo: Fix minimum Python version typo\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@e43bf0f",
          "timestamp": "2021-06-08T17:29:04Z",
          "tree_id": "11b27f05f05c4f8e7889a6c95126f525275e78c2"
        },
        "date": 1623173738914,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1065.777198619948,
            "unit": "iter/sec",
            "range": "stddev: 0.00014168041640388166",
            "extra": "mean: 938.2824114598046 usec\nrounds: 576"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1520.1920105036932,
            "unit": "iter/sec",
            "range": "stddev: 0.00008008599823855249",
            "extra": "mean: 657.811640299744 usec\nrounds: 1201"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 9109.050210296336,
            "unit": "iter/sec",
            "range": "stddev: 0.00002915726235872334",
            "extra": "mean: 109.78092961543439 usec\nrounds: 1847"
          }
        ]
      }
    ]
  }
}