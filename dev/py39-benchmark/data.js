window.BENCHMARK_DATA = {
  "lastUpdate": 1627480146164,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "25968b1e5ec1ea7876ffc9d47d81998a81dfc68b",
          "message": "Merge pull request #136 from TeoZosa/dependabot/pip/sentry-sdk-1.3.1",
          "timestamp": "2021-07-28T13:43:29Z",
          "tree_id": "cf39897406224bbd895555be67e3e803a5b1bf28"
        },
        "date": 1627480144796,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1413.1859804678445,
            "unit": "iter/sec",
            "range": "stddev: 0.00001479449107561077",
            "extra": "mean: 707.620945736345 usec\nrounds: 645"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 2071.4612458596325,
            "unit": "iter/sec",
            "range": "stddev: 0.000013688245263262994",
            "extra": "mean: 482.7510058412951 usec\nrounds: 1712"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 16528.950625006917,
            "unit": "iter/sec",
            "range": "stddev: 0.000003770437630148321",
            "extra": "mean: 60.4999084749569 usec\nrounds: 1770"
          }
        ]
      }
    ]
  }
}