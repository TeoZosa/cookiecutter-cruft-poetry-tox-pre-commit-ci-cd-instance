window.BENCHMARK_DATA = {
  "lastUpdate": 1612204091146,
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
        "date": 1612204089302,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1092.8033367835933,
            "unit": "iter/sec",
            "range": "stddev: 0.000020101046808255547",
            "extra": "mean: 915.0777329645259 usec\nrounds: 543"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1602.6356447226747,
            "unit": "iter/sec",
            "range": "stddev: 0.000017922368369569794",
            "extra": "mean: 623.9721444440002 usec\nrounds: 1260"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 12340.699671292681,
            "unit": "iter/sec",
            "range": "stddev: 0.000006672706108253772",
            "extra": "mean: 81.03268263842698 usec\nrounds: 1774"
          }
        ]
      }
    ]
  }
}