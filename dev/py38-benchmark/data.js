window.BENCHMARK_DATA = {
  "lastUpdate": 1628537185686,
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
        "date": 1628537182794,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 319.0977618509282,
            "unit": "iter/sec",
            "range": "stddev: 0.00010313959516645975",
            "extra": "mean: 3.1338358320017505 msec\nrounds: 125"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 942.9710979737856,
            "unit": "iter/sec",
            "range": "stddev: 0.00005946617744423475",
            "extra": "mean: 1.060477889671015 msec\nrounds: 852"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1966.1978560185632,
            "unit": "iter/sec",
            "range": "stddev: 0.00003524350919013737",
            "extra": "mean: 508.59581447461346 usec\nrounds: 760"
          }
        ]
      }
    ]
  }
}