window.BENCHMARK_DATA = {
  "lastUpdate": 1633124236661,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "d7eeca1d9e67b4f46517bd1680a8ad8a1193af48",
          "message": "Merge pull request #362 from TeoZosa/streamline-and-expand-performance-testing-workflow\n\n👷‍♀️ Streamline and Expand Performance Testing\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@587e34c",
          "timestamp": "2021-10-01T21:00:00Z",
          "tree_id": "ea2e1a176cf76eab14a790bf919b66f4f819c49c"
        },
        "date": 1633124233224,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 293.64572526707536,
            "unit": "iter/sec",
            "range": "stddev: 0.0003090201738118391",
            "extra": "mean: 3.4054641833811283 msec\nrounds: 349"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 813.1180824438192,
            "unit": "iter/sec",
            "range": "stddev: 0.0001844282213040794",
            "extra": "mean: 1.2298336755646964 msec\nrounds: 974"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1751.6651336409382,
            "unit": "iter/sec",
            "range": "stddev: 0.00002492842761833058",
            "extra": "mean: 570.8853711790458 usec\nrounds: 1832"
          }
        ]
      }
    ]
  }
}