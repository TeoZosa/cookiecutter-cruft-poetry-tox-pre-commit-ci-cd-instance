window.BENCHMARK_DATA = {
  "lastUpdate": 1628537137704,
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
          "id": "ee19bbe1c0c0738c160e307ecbfd60513f00eea0",
          "message": ":memo: Add emojis to pre-ToC sections\n\nSigned-off-by: Teo Zosa <teofilo@sonosim.com>\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@b68f732",
          "timestamp": "2021-08-09T19:18:27Z",
          "tree_id": "ccebb1eeb1e0c437cb0521793ff61e3386e01e49"
        },
        "date": 1628537135563,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 373.39606471366767,
            "unit": "iter/sec",
            "range": "stddev: 0.00002566653453452606",
            "extra": "mean: 2.6781214225351646 msec\nrounds: 142"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1062.9915215271083,
            "unit": "iter/sec",
            "range": "stddev: 0.000013890525487438342",
            "extra": "mean: 940.7412756814714 usec\nrounds: 954"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2283.1506150163054,
            "unit": "iter/sec",
            "range": "stddev: 0.00000999641915217151",
            "extra": "mean: 437.9912535874723 usec\nrounds: 836"
          }
        ]
      }
    ]
  }
}