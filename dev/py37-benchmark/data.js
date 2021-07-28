window.BENCHMARK_DATA = {
  "lastUpdate": 1627480239951,
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
        "date": 1627480238451,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1030.4746294470522,
            "unit": "iter/sec",
            "range": "stddev: 0.00001781679517704039",
            "extra": "mean: 970.4266086944765 usec\nrounds: 529"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1476.3696433637747,
            "unit": "iter/sec",
            "range": "stddev: 0.000019258906016930345",
            "extra": "mean: 677.3371455414042 usec\nrounds: 1278"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 11351.920973437464,
            "unit": "iter/sec",
            "range": "stddev: 0.000005582505312793192",
            "extra": "mean: 88.09081761050976 usec\nrounds: 1590"
          }
        ]
      }
    ]
  }
}