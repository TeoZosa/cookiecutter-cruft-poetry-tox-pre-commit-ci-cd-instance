window.BENCHMARK_DATA = {
  "lastUpdate": 1623108154876,
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
        "date": 1623108152483,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 955.0159838894077,
            "unit": "iter/sec",
            "range": "stddev: 0.00011399974949624445",
            "extra": "mean: 1.0471028934273854 msec\nrounds: 441"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1280.8169385846857,
            "unit": "iter/sec",
            "range": "stddev: 0.00020269962446532334",
            "extra": "mean: 780.7516982910993 usec\nrounds: 1170"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8459.935338771707,
            "unit": "iter/sec",
            "range": "stddev: 0.000060929489243699046",
            "extra": "mean: 118.20421314770822 usec\nrounds: 1506"
          }
        ]
      }
    ]
  }
}