window.BENCHMARK_DATA = {
  "lastUpdate": 1634061644596,
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
        "date": 1634061634482,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 286.71995106646506,
            "unit": "iter/sec",
            "range": "stddev: 0.00027054858736569944",
            "extra": "mean: 3.487723809523769 msec\nrounds: 315"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 878.7379433374754,
            "unit": "iter/sec",
            "range": "stddev: 0.00007424641124799789",
            "extra": "mean: 1.1379956989247184 msec\nrounds: 930"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1659.1141715290707,
            "unit": "iter/sec",
            "range": "stddev: 0.00003922590282789192",
            "extra": "mean: 602.7312750142935 usec\nrounds: 1749"
          }
        ]
      }
    ]
  }
}