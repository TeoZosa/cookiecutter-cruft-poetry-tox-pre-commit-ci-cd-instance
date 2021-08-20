window.BENCHMARK_DATA = {
  "lastUpdate": 1629475301498,
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
          "id": "243188f4e09a42ff108de395cf714132e2e33e9c",
          "message": "Merge pull request #292 from TeoZosa/dependabot/pip/docs/poetry-1.1.8\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@3741566",
          "timestamp": "2021-08-20T15:04:59Z",
          "tree_id": "f0493067023493cd3cb5bbd0e7a966e9afbf17de"
        },
        "date": 1629475299247,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 306.67795384659837,
            "unit": "iter/sec",
            "range": "stddev: 0.00005896060599400667",
            "extra": "mean: 3.2607495499992942 msec\nrounds: 120"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 888.1812422872838,
            "unit": "iter/sec",
            "range": "stddev: 0.00002113070003282261",
            "extra": "mean: 1.125896328799689 msec\nrounds: 809"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1820.935676113077,
            "unit": "iter/sec",
            "range": "stddev: 0.000015326798124268954",
            "extra": "mean: 549.1682178112819 usec\nrounds: 730"
          }
        ]
      }
    ]
  }
}