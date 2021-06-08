window.BENCHMARK_DATA = {
  "lastUpdate": 1623173820522,
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
        "date": 1623173813577,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 896.2663390606433,
            "unit": "iter/sec",
            "range": "stddev: 0.00012723323907398864",
            "extra": "mean: 1.1157397711132135 msec\nrounds: 450"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1208.566640115781,
            "unit": "iter/sec",
            "range": "stddev: 0.0001283077093633636",
            "extra": "mean: 827.4264461777628 usec\nrounds: 1152"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 7336.777728277597,
            "unit": "iter/sec",
            "range": "stddev: 0.000019980831761055283",
            "extra": "mean: 136.2996177662265 usec\nrounds: 1486"
          }
        ]
      }
    ]
  }
}