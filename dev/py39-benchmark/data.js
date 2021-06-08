window.BENCHMARK_DATA = {
  "lastUpdate": 1623173746079,
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
        "date": 1623173744953,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1063.8871307761515,
            "unit": "iter/sec",
            "range": "stddev: 0.000034142021504969856",
            "extra": "mean: 939.9493339772397 usec\nrounds: 518"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1558.310830942557,
            "unit": "iter/sec",
            "range": "stddev: 0.000025471324774371293",
            "extra": "mean: 641.7204964141472 usec\nrounds: 1255"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 12486.013822793711,
            "unit": "iter/sec",
            "range": "stddev: 0.000006641870946305184",
            "extra": "mean: 80.0896118002417 usec\nrounds: 1610"
          }
        ]
      }
    ]
  }
}