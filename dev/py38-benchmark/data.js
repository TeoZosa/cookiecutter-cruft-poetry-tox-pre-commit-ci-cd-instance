window.BENCHMARK_DATA = {
  "lastUpdate": 1630682952469,
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
        "date": 1630682949489,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 271.19984227023656,
            "unit": "iter/sec",
            "range": "stddev: 0.0004301262313148145",
            "extra": "mean: 3.687317778760181 msec\nrounds: 113"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 811.2638964407498,
            "unit": "iter/sec",
            "range": "stddev: 0.00021756175486060795",
            "extra": "mean: 1.2326445246575009 msec\nrounds: 730"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1669.6481090583793,
            "unit": "iter/sec",
            "range": "stddev: 0.00011111625878659756",
            "extra": "mean: 598.9285973341794 usec\nrounds: 750"
          }
        ]
      }
    ]
  }
}