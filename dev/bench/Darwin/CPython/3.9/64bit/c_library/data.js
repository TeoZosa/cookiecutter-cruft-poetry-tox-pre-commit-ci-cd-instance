window.BENCHMARK_DATA = {
  "lastUpdate": 1634061731797,
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
        "date": 1634061729643,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 308.1735396461099,
            "unit": "iter/sec",
            "range": "stddev: 0.00022636148403644372",
            "extra": "mean: 3.2449249249249204 msec\nrounds: 333"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 965.0230285360478,
            "unit": "iter/sec",
            "range": "stddev: 0.00004948652296842901",
            "extra": "mean: 1.0362447013487468 msec\nrounds: 1038"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1843.257693136744,
            "unit": "iter/sec",
            "range": "stddev: 0.00006991966683340774",
            "extra": "mean: 542.5177411294352 usec\nrounds: 2001"
          }
        ]
      }
    ]
  }
}