window.BENCHMARK_DATA = {
  "lastUpdate": 1622043262557,
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
        "date": 1622043261207,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1267.8400329027543,
            "unit": "iter/sec",
            "range": "stddev: 0.000018457542927705936",
            "extra": "mean: 788.7430385917636 usec\nrounds: 596"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1865.9624778739071,
            "unit": "iter/sec",
            "range": "stddev: 0.000015277854446135278",
            "extra": "mean: 535.916456980104 usec\nrounds: 1569"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13719.483208352964,
            "unit": "iter/sec",
            "range": "stddev: 0.000004995470951141149",
            "extra": "mean: 72.88904288983426 usec\nrounds: 1772"
          }
        ]
      }
    ]
  }
}