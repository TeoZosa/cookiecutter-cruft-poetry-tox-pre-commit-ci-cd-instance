window.BENCHMARK_DATA = {
  "lastUpdate": 1631117662895,
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
        "date": 1631117660213,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 357.9567163460032,
            "unit": "iter/sec",
            "range": "stddev: 0.00023522778756224246",
            "extra": "mean: 2.793633851064255 msec\nrounds: 141"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1004.4955229377512,
            "unit": "iter/sec",
            "range": "stddev: 0.00009901574488075351",
            "extra": "mean: 995.5245963420489 usec\nrounds: 820"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1927.8172776334977,
            "unit": "iter/sec",
            "range": "stddev: 0.00006719498286350812",
            "extra": "mean: 518.7213599556258 usec\nrounds: 839"
          }
        ]
      }
    ]
  }
}