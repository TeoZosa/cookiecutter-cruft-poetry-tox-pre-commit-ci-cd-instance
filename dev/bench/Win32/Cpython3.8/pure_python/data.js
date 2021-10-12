window.BENCHMARK_DATA = {
  "lastUpdate": 1634061138395,
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
        "date": 1634061133164,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 256,
            "unit": "iter/sec",
            "range": "stddev: 0.00012757759076995732",
            "extra": "mean: 3.90625 msec\nrounds: 10"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 740.7407407407409,
            "unit": "iter/sec",
            "range": "stddev: 0.00007905694150420946",
            "extra": "mean: 1.35 msec\nrounds: 10"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1373.3905579399145,
            "unit": "iter/sec",
            "range": "stddev: 0.000015095184110614013",
            "extra": "mean: 728.125 usec\nrounds: 10"
          }
        ]
      }
    ]
  }
}