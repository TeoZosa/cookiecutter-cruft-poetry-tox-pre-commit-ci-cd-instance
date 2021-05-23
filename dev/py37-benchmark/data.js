window.BENCHMARK_DATA = {
  "lastUpdate": 1621791754612,
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
          "id": "451d5ecdff0bd6b5559471f172c0d0607a59e370",
          "message": ":memo: :bulb: Update Poetry install hint message\n\nNewer Poetry versions use a new default install directory.\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@b91c3da",
          "timestamp": "2021-05-23T17:35:31Z",
          "tree_id": "f239ed1817a53284fb1190c314bdafbde6592939",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/451d5ecdff0bd6b5559471f172c0d0607a59e370"
        },
        "date": 1621791753399,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1013.8528678892367,
            "unit": "iter/sec",
            "range": "stddev: 0.00001826962089575153",
            "extra": "mean: 986.3364119903539 usec\nrounds: 517"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1447.218029051007,
            "unit": "iter/sec",
            "range": "stddev: 0.000018743052722555796",
            "extra": "mean: 690.9808887992751 usec\nrounds: 1259"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 10875.46540520772,
            "unit": "iter/sec",
            "range": "stddev: 0.0000231170334817651",
            "extra": "mean: 91.95008790347028 usec\nrounds: 1604"
          }
        ]
      }
    ]
  }
}