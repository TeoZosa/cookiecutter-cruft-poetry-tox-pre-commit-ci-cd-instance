window.BENCHMARK_DATA = {
  "lastUpdate": 1627480250540,
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
        "date": 1627480248552,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 925.9274295131222,
            "unit": "iter/sec",
            "range": "stddev: 0.00022404554766524708",
            "extra": "mean: 1.0799982462187423 msec\nrounds: 463"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1324.1709282230543,
            "unit": "iter/sec",
            "range": "stddev: 0.0001716774888883676",
            "extra": "mean: 755.1895141980883 usec\nrounds: 986"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8374.203428838302,
            "unit": "iter/sec",
            "range": "stddev: 0.00006210374460510559",
            "extra": "mean: 119.41434292798442 usec\nrounds: 2015"
          }
        ]
      }
    ]
  }
}