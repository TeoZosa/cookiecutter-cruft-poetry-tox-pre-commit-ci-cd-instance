window.BENCHMARK_DATA = {
  "lastUpdate": 1621725287501,
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
          "id": "f8e1c9e851e8ed587e55682aae268d5fe1ec9b39",
          "message": ":art: Reorganize dependencies into respective sections\n\nMirroring metaproject README organization.\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@354d29b",
          "timestamp": "2021-05-22T23:08:28Z",
          "tree_id": "c518fccdb54c6e35c7be412f9acbb72c93f79b19",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/f8e1c9e851e8ed587e55682aae268d5fe1ec9b39"
        },
        "date": 1621725285884,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1087.5760398784294,
            "unit": "iter/sec",
            "range": "stddev: 0.00011311350314604482",
            "extra": "mean: 919.475938539232 usec\nrounds: 602"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1416.7198108531065,
            "unit": "iter/sec",
            "range": "stddev: 0.00028824585695824196",
            "extra": "mean: 705.8558737862427 usec\nrounds: 1442"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 10243.46517533393,
            "unit": "iter/sec",
            "range": "stddev: 0.000026774104115173952",
            "extra": "mean: 97.62321469183895 usec\nrounds: 2110"
          }
        ]
      }
    ]
  }
}