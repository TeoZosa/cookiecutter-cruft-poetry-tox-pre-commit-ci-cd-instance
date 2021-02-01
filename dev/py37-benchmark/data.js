window.BENCHMARK_DATA = {
  "lastUpdate": 1612204072738,
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
          "id": "dd703873712eff3df0fa82c18f809cbb516c0ff2",
          "message": ":memo: Update `icontract` benchmark links\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@886f8a2",
          "timestamp": "2021-02-01T18:23:52Z",
          "tree_id": "7caa624685cfe9baba875cc2e7d27077094f1c6c",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/dd703873712eff3df0fa82c18f809cbb516c0ff2"
        },
        "date": 1612204071859,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1231.7645875173782,
            "unit": "iter/sec",
            "range": "stddev: 0.00008188319104865651",
            "extra": "mean: 811.8434399997651 usec\nrounds: 550"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1763.892904267601,
            "unit": "iter/sec",
            "range": "stddev: 0.00007518795763549",
            "extra": "mean: 566.9278432837834 usec\nrounds: 1608"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 14392.437928931413,
            "unit": "iter/sec",
            "range": "stddev: 0.00001584375575053536",
            "extra": "mean: 69.48093192674595 usec\nrounds: 1704"
          }
        ]
      }
    ]
  }
}