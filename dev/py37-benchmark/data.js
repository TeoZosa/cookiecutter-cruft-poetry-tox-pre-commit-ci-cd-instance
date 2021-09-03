window.BENCHMARK_DATA = {
  "lastUpdate": 1630699440225,
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
          "id": "bcac28b52b43bd324b41bbb1d053327082d96391",
          "message": ":children_crossing: Use dummy initial user-specific values\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@89f0357",
          "timestamp": "2021-09-03T19:54:19Z",
          "tree_id": "595b78ad5e65c9118eb03aca82e1fdd265ff4646"
        },
        "date": 1630699437303,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 266.00526577659684,
            "unit": "iter/sec",
            "range": "stddev: 0.00043633324859998317",
            "extra": "mean: 3.7593240760874442 msec\nrounds: 92"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 772.3705167441726,
            "unit": "iter/sec",
            "range": "stddev: 0.0003500434652317268",
            "extra": "mean: 1.2947153967183649 msec\nrounds: 610"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1569.3276862905261,
            "unit": "iter/sec",
            "range": "stddev: 0.00015471652188454613",
            "extra": "mean: 637.2155469733249 usec\nrounds: 777"
          }
        ]
      }
    ]
  }
}