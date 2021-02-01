window.BENCHMARK_DATA = {
  "lastUpdate": 1612203620458,
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
          "id": "920d21140c781698580f0d4fa5814386d1792ba1",
          "message": ":memo: Add link to local `icontract` benchmarks\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@f4a97d4",
          "timestamp": "2021-02-01T18:16:28Z",
          "tree_id": "81984a4d20b329926b9090248c08155012eacdf0",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/920d21140c781698580f0d4fa5814386d1792ba1"
        },
        "date": 1612203616843,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1296.850257332647,
            "unit": "iter/sec",
            "range": "stddev: 0.000017075489645292413",
            "extra": "mean: 771.0990489039137 usec\nrounds: 593"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1914.6764837400356,
            "unit": "iter/sec",
            "range": "stddev: 0.00001551949167762195",
            "extra": "mean: 522.281444668213 usec\nrounds: 1491"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 14261.354202580327,
            "unit": "iter/sec",
            "range": "stddev: 0.000007518203548431942",
            "extra": "mean: 70.1195682959104 usec\nrounds: 1596"
          }
        ]
      }
    ]
  }
}