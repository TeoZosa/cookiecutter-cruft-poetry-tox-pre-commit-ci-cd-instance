window.BENCHMARK_DATA = {
  "lastUpdate": 1630689823164,
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
        "date": 1630689820125,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 265.65182324943316,
            "unit": "iter/sec",
            "range": "stddev: 0.0004936301675278458",
            "extra": "mean: 3.764325754546214 msec\nrounds: 110"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 808.203768087079,
            "unit": "iter/sec",
            "range": "stddev: 0.00018019614986999985",
            "extra": "mean: 1.237311726926094 msec\nrounds: 791"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1628.9493675977099,
            "unit": "iter/sec",
            "range": "stddev: 0.00010243683104480161",
            "extra": "mean: 613.8926229946288 usec\nrounds: 748"
          }
        ]
      }
    ]
  }
}