window.BENCHMARK_DATA = {
  "lastUpdate": 1621709618166,
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
        "date": 1621709616683,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1047.9712498316787,
            "unit": "iter/sec",
            "range": "stddev: 0.00018470566418762738",
            "extra": "mean: 954.2246508772223 usec\nrounds: 570"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1464.7752379503977,
            "unit": "iter/sec",
            "range": "stddev: 0.00017755323246723025",
            "extra": "mean: 682.6985970893805 usec\nrounds: 1375"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8839.282361355277,
            "unit": "iter/sec",
            "range": "stddev: 0.00009506545147367398",
            "extra": "mean: 113.1313560444601 usec\nrounds: 1820"
          }
        ]
      }
    ]
  }
}