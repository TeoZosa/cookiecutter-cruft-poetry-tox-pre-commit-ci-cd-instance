window.BENCHMARK_DATA = {
  "lastUpdate": 1631121312144,
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
          "id": "d4465ddeafcf95878d84e00ac2513a8f026c4529",
          "message": ":cookie: :memo: Hyperlink full text corresponding to reference\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@17433b3",
          "timestamp": "2021-09-08T17:07:09Z",
          "tree_id": "f681d196c4b109270b75a167e655897538a7ca00"
        },
        "date": 1631121310330,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 375.25924727245956,
            "unit": "iter/sec",
            "range": "stddev: 0.000024676485963922266",
            "extra": "mean: 2.664824404111068 msec\nrounds: 146"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1076.4244135473007,
            "unit": "iter/sec",
            "range": "stddev: 0.000013892557678096694",
            "extra": "mean: 929.0015977104717 usec\nrounds: 962"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2324.0504780169476,
            "unit": "iter/sec",
            "range": "stddev: 0.000009774916907087077",
            "extra": "mean: 430.2832530785967 usec\nrounds: 893"
          }
        ]
      }
    ]
  }
}