window.BENCHMARK_DATA = {
  "lastUpdate": 1622043335634,
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
        "date": 1622043334044,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1067.4434770286691,
            "unit": "iter/sec",
            "range": "stddev: 0.00002010189105249772",
            "extra": "mean: 936.8177533705069 usec\nrounds: 519"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1559.789982357281,
            "unit": "iter/sec",
            "range": "stddev: 0.000019106954118061376",
            "extra": "mean: 641.1119518082295 usec\nrounds: 1328"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 12255.724650525855,
            "unit": "iter/sec",
            "range": "stddev: 0.000027092380234329632",
            "extra": "mean: 81.59452243871137 usec\nrounds: 1493"
          }
        ]
      }
    ]
  }
}