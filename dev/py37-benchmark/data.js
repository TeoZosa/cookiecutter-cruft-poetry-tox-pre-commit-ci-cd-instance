window.BENCHMARK_DATA = {
  "lastUpdate": 1622043364431,
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
          "id": "ea3fe7d85861bd4a83ec8db730f84d47874adc75",
          "message": ":bug: Rollback `install-poetry.py` migration\n\nUntil python-poetry/poetry#3870 is resolved.\n\nOriginal commit: 8c59f3e2739c5e92c8279b9dfb7775fcf75c23d1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@c578af1",
          "timestamp": "2021-05-26T15:28:44Z",
          "tree_id": "c0f085e5e4dec72c2d379f7c17839886af6ed23d",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/ea3fe7d85861bd4a83ec8db730f84d47874adc75"
        },
        "date": 1622043361880,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 948.2113957614039,
            "unit": "iter/sec",
            "range": "stddev: 0.00012126706092137911",
            "extra": "mean: 1.05461715021576 msec\nrounds: 466"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1292.0125081831795,
            "unit": "iter/sec",
            "range": "stddev: 0.00016929825828177638",
            "extra": "mean: 773.9863148896245 usec\nrounds: 1229"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8191.244308054321,
            "unit": "iter/sec",
            "range": "stddev: 0.00003363964681042123",
            "extra": "mean: 122.08157422636216 usec\nrounds: 1583"
          }
        ]
      }
    ]
  }
}