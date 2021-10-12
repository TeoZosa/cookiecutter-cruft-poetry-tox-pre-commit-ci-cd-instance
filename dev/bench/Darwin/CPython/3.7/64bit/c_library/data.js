window.BENCHMARK_DATA = {
  "lastUpdate": 1634061618639,
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
          "id": "13a2a5d9efa91bbe55c4495d18a97536657cb76b",
          "message": ":cookie: :art: Remove gratuitous newlines\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@4e4a24f",
          "timestamp": "2021-10-12T17:40:15Z",
          "tree_id": "1858ad76937eb7dc75a59c085dd1f547330f2927"
        },
        "date": 1634061615319,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 283.0689708780464,
            "unit": "iter/sec",
            "range": "stddev: 0.00039605693122480033",
            "extra": "mean: 3.5327079365079066 msec\nrounds: 315"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 872.8888653767433,
            "unit": "iter/sec",
            "range": "stddev: 0.00007634167525369921",
            "extra": "mean: 1.1456212121211957 msec\nrounds: 924"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1627.0033107732704,
            "unit": "iter/sec",
            "range": "stddev: 0.00007198354273490127",
            "extra": "mean: 614.6268992684023 usec\nrounds: 1777"
          }
        ]
      }
    ]
  }
}