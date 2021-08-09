window.BENCHMARK_DATA = {
  "lastUpdate": 1628537203303,
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
        "date": 1628537200575,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 282.90249323401065,
            "unit": "iter/sec",
            "range": "stddev: 0.0002917036375835929",
            "extra": "mean: 3.5347868043454187 msec\nrounds: 92"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 782.1154850915491,
            "unit": "iter/sec",
            "range": "stddev: 0.00033176681067563057",
            "extra": "mean: 1.2785835583896499 msec\nrounds: 745"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1666.4118410005374,
            "unit": "iter/sec",
            "range": "stddev: 0.00011781793430113493",
            "extra": "mean: 600.0917512681533 usec\nrounds: 591"
          }
        ]
      }
    ]
  }
}