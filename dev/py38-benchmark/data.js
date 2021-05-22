window.BENCHMARK_DATA = {
  "lastUpdate": 1621709601370,
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
          "id": "1e34a12cf10efcad8964af511f5542bab52e9177",
          "message": ":memo: :cookie: Add new feature documentation\n\nSee Also:\n    - #168\n    - #172\n    - #173\n    - #175\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@9ef0b89",
          "timestamp": "2021-05-22T18:46:47Z",
          "tree_id": "dcf2a2e046740bc6b0291fa82fbc0ce6e6fb5072",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/1e34a12cf10efcad8964af511f5542bab52e9177"
        },
        "date": 1621709599670,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 976.4659587593683,
            "unit": "iter/sec",
            "range": "stddev: 0.0002241842515635421",
            "extra": "mean: 1.0241012408364267 msec\nrounds: 573"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1369.6429837349963,
            "unit": "iter/sec",
            "range": "stddev: 0.00017466837444182022",
            "extra": "mean: 730.1172728041979 usec\nrounds: 1162"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8857.009452753715,
            "unit": "iter/sec",
            "range": "stddev: 0.000050866499191121637",
            "extra": "mean: 112.90492635627615 usec\nrounds: 1548"
          }
        ]
      }
    ]
  }
}