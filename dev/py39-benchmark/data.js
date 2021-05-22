window.BENCHMARK_DATA = {
  "lastUpdate": 1621709604521,
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
        "date": 1621709602692,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1062.4858361376646,
            "unit": "iter/sec",
            "range": "stddev: 0.00020900022429628514",
            "extra": "mean: 941.1890172909859 usec\nrounds: 347"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1629.2926268262588,
            "unit": "iter/sec",
            "range": "stddev: 0.0001622668059686538",
            "extra": "mean: 613.7632881503465 usec\nrounds: 1173"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13996.364760933227,
            "unit": "iter/sec",
            "range": "stddev: 0.000009833419429014614",
            "extra": "mean: 71.4471233838667 usec\nrounds: 1856"
          }
        ]
      }
    ]
  }
}