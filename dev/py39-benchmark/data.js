window.BENCHMARK_DATA = {
  "lastUpdate": 1630682870859,
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
        "date": 1630682868117,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 298.7860214240013,
            "unit": "iter/sec",
            "range": "stddev: 0.0008748293116827713",
            "extra": "mean: 3.346876789061426 msec\nrounds: 128"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 880.2519756109999,
            "unit": "iter/sec",
            "range": "stddev: 0.00018199509339092895",
            "extra": "mean: 1.1360383477763634 msec\nrounds: 877"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1800.5994342461204,
            "unit": "iter/sec",
            "range": "stddev: 0.00015317750646184566",
            "extra": "mean: 555.3706065772939 usec\nrounds: 821"
          }
        ]
      }
    ]
  }
}