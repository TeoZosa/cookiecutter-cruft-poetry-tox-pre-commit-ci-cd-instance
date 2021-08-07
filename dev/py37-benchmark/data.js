window.BENCHMARK_DATA = {
  "lastUpdate": 1628359411066,
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
        "date": 1628359408120,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 917.5809411119108,
            "unit": "iter/sec",
            "range": "stddev: 0.00039695817799309904",
            "extra": "mean: 1.089822112900705 msec\nrounds: 496"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1224.5856689876218,
            "unit": "iter/sec",
            "range": "stddev: 0.00032273014870514663",
            "extra": "mean: 816.6027296617889 usec\nrounds: 1180"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 7903.487950654076,
            "unit": "iter/sec",
            "range": "stddev: 0.00007680371710590133",
            "extra": "mean: 126.52641545651274 usec\nrounds: 1721"
          }
        ]
      }
    ]
  }
}