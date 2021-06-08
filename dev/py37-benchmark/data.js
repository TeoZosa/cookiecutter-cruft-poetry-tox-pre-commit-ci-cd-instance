window.BENCHMARK_DATA = {
  "lastUpdate": 1623176137634,
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
        "date": 1623176136187,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1199.6257775612175,
            "unit": "iter/sec",
            "range": "stddev: 0.000016891558567994448",
            "extra": "mean: 833.5932910952887 usec\nrounds: 584"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1710.662637802494,
            "unit": "iter/sec",
            "range": "stddev: 0.000020532882338451633",
            "extra": "mean: 584.5687968520745 usec\nrounds: 1398"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 11072.655529341588,
            "unit": "iter/sec",
            "range": "stddev: 0.00012867032298163184",
            "extra": "mean: 90.31257202484858 usec\nrounds: 1437"
          }
        ]
      }
    ]
  }
}