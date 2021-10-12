window.BENCHMARK_DATA = {
  "lastUpdate": 1634061101217,
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
        "date": 1634061095872,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 306.2200956937799,
            "unit": "iter/sec",
            "range": "stddev: 0.00004941058844013083",
            "extra": "mean: 3.265625 msec\nrounds: 10"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 897.2549019607842,
            "unit": "iter/sec",
            "range": "stddev: 0.0000460704787320568",
            "extra": "mean: 1.1145104895104896 msec\nrounds: 10"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1720.430107526882,
            "unit": "iter/sec",
            "range": "stddev: 0.000012325166214790878",
            "extra": "mean: 581.25 usec\nrounds: 10"
          }
        ]
      }
    ]
  }
}