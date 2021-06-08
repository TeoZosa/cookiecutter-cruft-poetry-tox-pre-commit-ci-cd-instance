window.BENCHMARK_DATA = {
  "lastUpdate": 1623176117727,
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
        "date": 1623176115675,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1241.3025604359175,
            "unit": "iter/sec",
            "range": "stddev: 0.00006281738821227975",
            "extra": "mean: 805.605363166916 usec\nrounds: 581"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1746.2933147390404,
            "unit": "iter/sec",
            "range": "stddev: 0.00004678824391508213",
            "extra": "mean: 572.6414867192207 usec\nrounds: 1619"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13609.188020273863,
            "unit": "iter/sec",
            "range": "stddev: 0.000009239683551708355",
            "extra": "mean: 73.47976958730243 usec\nrounds: 1736"
          }
        ]
      }
    ]
  }
}