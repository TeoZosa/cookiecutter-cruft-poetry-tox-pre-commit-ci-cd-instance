window.BENCHMARK_DATA = {
  "lastUpdate": 1630682946206,
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
          "id": "0c77a826e11507e465cdf70e20209742b5e0ded9",
          "message": ":bug: Fix incomplete `jupyter_notebook_support` refactoring\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@19253d6",
          "timestamp": "2021-09-03T15:19:35Z",
          "tree_id": "5230a65ca5ae7fb93ba56a0fd62b78b42fa8bfd6"
        },
        "date": 1630682943123,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 265.0556540736406,
            "unit": "iter/sec",
            "range": "stddev: 0.00017497785142887433",
            "extra": "mean: 3.77279256122629 msec\nrounds: 98"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 745.0474844314235,
            "unit": "iter/sec",
            "range": "stddev: 0.0002658917960310359",
            "extra": "mean: 1.3421963309669334 msec\nrounds: 704"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1414.7384889766693,
            "unit": "iter/sec",
            "range": "stddev: 0.00032314749986032975",
            "extra": "mean: 706.8444152695214 usec\nrounds: 655"
          }
        ]
      }
    ]
  }
}