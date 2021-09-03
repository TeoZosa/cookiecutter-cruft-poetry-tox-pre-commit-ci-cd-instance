window.BENCHMARK_DATA = {
  "lastUpdate": 1630689871959,
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
          "id": "3ce9fd3c3a28848d42dbbb150c2a60bad11a057d",
          "message": ":art: Auto-format with Black\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@e9c44c1",
          "timestamp": "2021-09-03T17:14:19Z",
          "tree_id": "16e85786bbea140f64bfb20d0d556585189cab62"
        },
        "date": 1630689868964,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 257.19737209715487,
            "unit": "iter/sec",
            "range": "stddev: 0.000735930278594585",
            "extra": "mean: 3.888064609082614 msec\nrounds: 110"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 741.0982084271902,
            "unit": "iter/sec",
            "range": "stddev: 0.0002989624469471763",
            "extra": "mean: 1.3493488293842582 msec\nrounds: 633"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1579.3089161597659,
            "unit": "iter/sec",
            "range": "stddev: 0.00019475137826713632",
            "extra": "mean: 633.1883457174367 usec\nrounds: 700"
          }
        ]
      }
    ]
  }
}