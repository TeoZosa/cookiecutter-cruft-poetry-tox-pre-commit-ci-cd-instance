window.BENCHMARK_DATA = {
  "lastUpdate": 1623108158558,
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
          "id": "8b0134a6ca2c261efaa94e277f18c53cbd41d835",
          "message": ":art: Clean up miscellaneous whitespace\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@03e87a3",
          "timestamp": "2021-06-07T23:14:56Z",
          "tree_id": "ed353355bf11364825bf97dd14e1ad72fbc13e8b"
        },
        "date": 1623108156030,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 940.7466288950324,
            "unit": "iter/sec",
            "range": "stddev: 0.00015538129735473478",
            "extra": "mean: 1.0629854726926469 msec\nrounds: 531"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1325.7975902711692,
            "unit": "iter/sec",
            "range": "stddev: 0.0001520873399970728",
            "extra": "mean: 754.262948837814 usec\nrounds: 1075"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8815.372460092107,
            "unit": "iter/sec",
            "range": "stddev: 0.00006129296043807862",
            "extra": "mean: 113.43820179204901 usec\nrounds: 1784"
          }
        ]
      }
    ]
  }
}