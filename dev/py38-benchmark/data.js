window.BENCHMARK_DATA = {
  "lastUpdate": 1628294731201,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "23c53e1fcdd323fc74cb21b9e37ac0ae5e849348",
          "message": ":arrow_up: Update `poetry.lock` lockfile\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@ec3211f",
          "timestamp": "2021-08-06T23:58:24Z",
          "tree_id": "8d57cdb727bb4979f1dda372525133336b56c786"
        },
        "date": 1628294729098,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1369.0408352358638,
            "unit": "iter/sec",
            "range": "stddev: 0.00009718227123331426",
            "extra": "mean: 730.4384020274429 usec\nrounds: 592"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 2047.1335686439827,
            "unit": "iter/sec",
            "range": "stddev: 0.0000690826128676163",
            "extra": "mean: 488.48791076314484 usec\nrounds: 1468"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 15426.732964870787,
            "unit": "iter/sec",
            "range": "stddev: 0.000010982161159984723",
            "extra": "mean: 64.82253904810337 usec\nrounds: 2228"
          }
        ]
      }
    ]
  }
}