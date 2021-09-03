window.BENCHMARK_DATA = {
  "lastUpdate": 1630687659073,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "e522ec805ad4eab2424ab9f7ccf42d08d9a46f04",
          "message": ":arrow_up: Bump template dev-dependencies: `black`\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@8834781",
          "timestamp": "2021-09-03T16:38:39Z",
          "tree_id": "2005b9f71e6597eaf83624b559530d1084769ec7"
        },
        "date": 1630687656236,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 320.18758034461854,
            "unit": "iter/sec",
            "range": "stddev: 0.00006651410290439005",
            "extra": "mean: 3.1231692338712764 msec\nrounds: 124"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 901.771782824429,
            "unit": "iter/sec",
            "range": "stddev: 0.00004047982952480424",
            "extra": "mean: 1.1089280226399538 msec\nrounds: 795"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1960.9798459623535,
            "unit": "iter/sec",
            "range": "stddev: 0.000018854048844204695",
            "extra": "mean: 509.94914713631266 usec\nrounds: 768"
          }
        ]
      }
    ]
  }
}