window.BENCHMARK_DATA = {
  "lastUpdate": 1634061689828,
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
        "date": 1634061680652,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 302.40893841190876,
            "unit": "iter/sec",
            "range": "stddev: 0.00014616330833294144",
            "extra": "mean: 3.3067805642633092 msec\nrounds: 319"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 897.4907118004379,
            "unit": "iter/sec",
            "range": "stddev: 0.00008731282347472323",
            "extra": "mean: 1.114217659137575 msec\nrounds: 974"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1630.2575806976904,
            "unit": "iter/sec",
            "range": "stddev: 0.00005344261350830604",
            "extra": "mean: 613.4000000000226 usec\nrounds: 1825"
          }
        ]
      }
    ]
  }
}