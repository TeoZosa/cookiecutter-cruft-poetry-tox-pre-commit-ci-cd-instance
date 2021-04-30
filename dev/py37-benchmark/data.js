window.BENCHMARK_DATA = {
  "lastUpdate": 1619809231245,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action",
            "username": "actions-user"
          },
          "distinct": true,
          "id": "9c1f76a003d049d03720a5e43c0948dd92cfdccd",
          "message": "Merge pull request #156 from TeoZosa/dependabot/pip/black-21.4b2\n\n⬆️ Bump black from 21.4b0 to 21.4b2\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@14a2971",
          "timestamp": "2021-04-30T18:56:18Z",
          "tree_id": "ced55a97e20d118f686777fba97c50d54b759836",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/9c1f76a003d049d03720a5e43c0948dd92cfdccd"
        },
        "date": 1619809230272,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 997.2688986963705,
            "unit": "iter/sec",
            "range": "stddev: 0.00021694762229540436",
            "extra": "mean: 1.0027385806447988 msec\nrounds: 496"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1390.0005699838293,
            "unit": "iter/sec",
            "range": "stddev: 0.0002620563670859943",
            "extra": "mean: 719.4241654243592 usec\nrounds: 1342"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 9565.04538891757,
            "unit": "iter/sec",
            "range": "stddev: 0.000028824420325468838",
            "extra": "mean: 104.54733452270268 usec\nrounds: 1964"
          }
        ]
      }
    ]
  }
}