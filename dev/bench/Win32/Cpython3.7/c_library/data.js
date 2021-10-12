window.BENCHMARK_DATA = {
  "lastUpdate": 1634061108520,
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
        "date": 1634061103624,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 275.86206896551727,
            "unit": "iter/sec",
            "range": "stddev: 0.00012325166214790858",
            "extra": "mean: 3.625 msec\nrounds: 10"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 792.0792079207921,
            "unit": "iter/sec",
            "range": "stddev: 0.00003952847075210471",
            "extra": "mean: 1.2625 msec\nrounds: 10"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1444.6952595936798,
            "unit": "iter/sec",
            "range": "stddev: 0.00001482317653203929",
            "extra": "mean: 692.1875 usec\nrounds: 10"
          }
        ]
      }
    ]
  }
}