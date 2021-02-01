window.BENCHMARK_DATA = {
  "lastUpdate": 1612204213006,
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
          "id": "9b51f1ca43f7d3673c355abf01685856494bead2",
          "message": ":memo: Update `icontract` benchmark links\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@082d94c",
          "timestamp": "2021-02-01T18:26:09Z",
          "tree_id": "3d3fa1a6fb3c0ddef851f0b5db34c0cbe2d313fa",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/9b51f1ca43f7d3673c355abf01685856494bead2"
        },
        "date": 1612204211986,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1257.6967765241498,
            "unit": "iter/sec",
            "range": "stddev: 0.000015007640363852907",
            "extra": "mean: 795.1042084751646 usec\nrounds: 590"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1778.0149094866754,
            "unit": "iter/sec",
            "range": "stddev: 0.000016527173893950007",
            "extra": "mean: 562.4249800518863 usec\nrounds: 1554"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13831.688812093642,
            "unit": "iter/sec",
            "range": "stddev: 0.0000046507310506112986",
            "extra": "mean: 72.29775145936316 usec\nrounds: 1883"
          }
        ]
      }
    ]
  }
}