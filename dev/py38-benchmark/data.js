window.BENCHMARK_DATA = {
  "lastUpdate": 1631117634627,
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
          "id": "aaca6932b8d00dd4d2b22d83d5300e9dc5492358",
          "message": ":cookie: :memo: Document Make's role in project\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@5c4ef9d",
          "timestamp": "2021-09-08T16:04:34Z",
          "tree_id": "45c494a81d69d0eecc01e62c002c087ea03695ae"
        },
        "date": 1631117632781,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 413.3196897042226,
            "unit": "iter/sec",
            "range": "stddev: 0.000034955777289661624",
            "extra": "mean: 2.419434701297715 msec\nrounds: 154"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1197.692060008206,
            "unit": "iter/sec",
            "range": "stddev: 0.00001740422064539285",
            "extra": "mean: 834.9391578943494 usec\nrounds: 1026"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2485.8124686539672,
            "unit": "iter/sec",
            "range": "stddev: 0.000010159785259351925",
            "extra": "mean: 402.28296084679545 usec\nrounds: 945"
          }
        ]
      }
    ]
  }
}