window.BENCHMARK_DATA = {
  "lastUpdate": 1628359335548,
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
          "id": "6c9773f41e6c34a1431a6ede6fb93c9b9e51731f",
          "message": ":memo: Add emojis to all documentation sections\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@871c8bf",
          "timestamp": "2021-08-07T17:52:36Z",
          "tree_id": "e442514e955ff043fc76f568deb806a6832d3509"
        },
        "date": 1628359332916,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1274.3678060245952,
            "unit": "iter/sec",
            "range": "stddev: 0.000017991480308911846",
            "extra": "mean: 784.7028112861005 usec\nrounds: 567"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1879.5653505608286,
            "unit": "iter/sec",
            "range": "stddev: 0.000015433281510478132",
            "extra": "mean: 532.037898922545 usec\nrounds: 1484"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13827.004224874428,
            "unit": "iter/sec",
            "range": "stddev: 0.0000045293920560624545",
            "extra": "mean: 72.3222459280822 usec\nrounds: 1842"
          }
        ]
      }
    ]
  }
}