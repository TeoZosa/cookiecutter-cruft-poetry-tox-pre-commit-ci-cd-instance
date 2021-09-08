window.BENCHMARK_DATA = {
  "lastUpdate": 1631117621641,
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
        "date": 1631117619698,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 301.5474454707496,
            "unit": "iter/sec",
            "range": "stddev: 0.0007940588440277848",
            "extra": "mean: 3.3162277280740584 msec\nrounds: 114"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 889.4511155064874,
            "unit": "iter/sec",
            "range": "stddev: 0.00017990832515919135",
            "extra": "mean: 1.1242888817229284 msec\nrounds: 744"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1847.2909733986653,
            "unit": "iter/sec",
            "range": "stddev: 0.00009151881422765145",
            "extra": "mean: 541.3332357490978 usec\nrounds: 772"
          }
        ]
      }
    ]
  }
}