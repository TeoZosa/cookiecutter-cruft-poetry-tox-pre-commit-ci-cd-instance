window.BENCHMARK_DATA = {
  "lastUpdate": 1623108145823,
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
        "date": 1623108143502,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 927.6358680425502,
            "unit": "iter/sec",
            "range": "stddev: 0.00014831992059563044",
            "extra": "mean: 1.0780092000001562 msec\nrounds: 385"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1330.0049974553176,
            "unit": "iter/sec",
            "range": "stddev: 0.0001740236570126793",
            "extra": "mean: 751.8768740818928 usec\nrounds: 1223"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8132.38665649348,
            "unit": "iter/sec",
            "range": "stddev: 0.00012251171629702634",
            "extra": "mean: 122.96513216099095 usec\nrounds: 1763"
          }
        ]
      }
    ]
  }
}