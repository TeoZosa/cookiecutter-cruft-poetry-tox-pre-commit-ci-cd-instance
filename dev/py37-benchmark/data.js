window.BENCHMARK_DATA = {
  "lastUpdate": 1631121355565,
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
        "date": 1631121352916,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 350.9193857035795,
            "unit": "iter/sec",
            "range": "stddev: 0.00020047450148493818",
            "extra": "mean: 2.849657330828388 msec\nrounds: 133"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1007.9726806490123,
            "unit": "iter/sec",
            "range": "stddev: 0.0000946037881059464",
            "extra": "mean: 992.0903802235208 usec\nrounds: 981"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2092.5434718504334,
            "unit": "iter/sec",
            "range": "stddev: 0.00004808759630489427",
            "extra": "mean: 477.8873239444347 usec\nrounds: 781"
          }
        ]
      }
    ]
  }
}