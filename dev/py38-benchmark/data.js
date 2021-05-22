window.BENCHMARK_DATA = {
  "lastUpdate": 1621721073207,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action",
            "username": "actions-user"
          },
          "distinct": true,
          "id": "bbbd42e917009752a28cd14701a2990737c9ff06",
          "message": ":art: Trim whitespace in \"verify-user-install\" job render template block\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@25be440",
          "timestamp": "2021-05-22T21:57:45Z",
          "tree_id": "2765b2bdea8d6b67fe8710e25a08896d047b455f",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/bbbd42e917009752a28cd14701a2990737c9ff06"
        },
        "date": 1621721071332,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 989.2369240083049,
            "unit": "iter/sec",
            "range": "stddev: 0.00016691888793258087",
            "extra": "mean: 1.0108801801979692 msec\nrounds: 505"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1419.1139875281394,
            "unit": "iter/sec",
            "range": "stddev: 0.00010428715649627366",
            "extra": "mean: 704.6650295807694 usec\nrounds: 1217"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8346.855732548318,
            "unit": "iter/sec",
            "range": "stddev: 0.00007126510967213875",
            "extra": "mean: 119.80559291333255 usec\nrounds: 1270"
          }
        ]
      }
    ]
  }
}