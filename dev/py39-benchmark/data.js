window.BENCHMARK_DATA = {
  "lastUpdate": 1629476109251,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "41f509fa6ed8ac33eed52fba1ea088069e5fe914",
          "message": "Merge pull request #292 from TeoZosa/dependabot/pip/docs/poetry-1.1.8\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@7b3bb9a",
          "timestamp": "2021-08-20T15:17:58Z",
          "tree_id": "f0493067023493cd3cb5bbd0e7a966e9afbf17de"
        },
        "date": 1629476106556,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 302.4628186234572,
            "unit": "iter/sec",
            "range": "stddev: 0.0005114151588211797",
            "extra": "mean: 3.306191500003584 msec\nrounds: 134"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 835.4925319160682,
            "unit": "iter/sec",
            "range": "stddev: 0.00017639124627613604",
            "extra": "mean: 1.1968987893963101 msec\nrounds: 679"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1806.5509676945787,
            "unit": "iter/sec",
            "range": "stddev: 0.00009707696304369324",
            "extra": "mean: 553.5409838318291 usec\nrounds: 804"
          }
        ]
      }
    ]
  }
}