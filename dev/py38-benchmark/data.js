window.BENCHMARK_DATA = {
  "lastUpdate": 1623176188595,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "860695ffd0855c6a8a80fe59df3db499cdffebba",
          "message": ":bulb: Backtick-quote sphinx extensions in comments\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@25194b0",
          "timestamp": "2021-06-08T18:09:05Z",
          "tree_id": "b1a6266c228478d68856e2a6c7c32c7d59716092"
        },
        "date": 1623176186174,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 955.5300391860834,
            "unit": "iter/sec",
            "range": "stddev: 0.0001601046078392873",
            "extra": "mean: 1.0465395738388257 msec\nrounds: 474"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1333.4740706431105,
            "unit": "iter/sec",
            "range": "stddev: 0.00021195606945957328",
            "extra": "mean: 749.9208436184425 usec\nrounds: 1426"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8311.317281728863,
            "unit": "iter/sec",
            "range": "stddev: 0.00009969464151430981",
            "extra": "mean: 120.31787093465248 usec\nrounds: 1937"
          }
        ]
      }
    ]
  }
}