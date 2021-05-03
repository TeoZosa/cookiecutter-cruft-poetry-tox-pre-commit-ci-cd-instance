window.BENCHMARK_DATA = {
  "lastUpdate": 1620001057096,
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
          "id": "bd30812da5cb7fe7bd4b29cdd8149c14f3482946",
          "message": ":arrow_up: Update `Go` version to `1.16`\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@07fd0ca",
          "timestamp": "2021-05-03T00:12:16Z",
          "tree_id": "3f5cdab40c1fcda4d5d394a3fae8a61b5ad98389",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/bd30812da5cb7fe7bd4b29cdd8149c14f3482946"
        },
        "date": 1620001055491,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 850.0920509292046,
            "unit": "iter/sec",
            "range": "stddev: 0.0000926503389364871",
            "extra": "mean: 1.176343195900887 msec\nrounds: 439"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1151.4875430044149,
            "unit": "iter/sec",
            "range": "stddev: 0.00011338292135563689",
            "extra": "mean: 868.4418742306499 usec\nrounds: 1137"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 7600.633299399812,
            "unit": "iter/sec",
            "range": "stddev: 0.000028828428881270293",
            "extra": "mean: 131.5679839572007 usec\nrounds: 1683"
          }
        ]
      }
    ]
  }
}