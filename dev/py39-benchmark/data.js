window.BENCHMARK_DATA = {
  "lastUpdate": 1629475307625,
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
        "date": 1629475305476,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 354.56587255827606,
            "unit": "iter/sec",
            "range": "stddev: 0.00032980970411897344",
            "extra": "mean: 2.8203503986008727 msec\nrounds: 143"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 984.5035102245525,
            "unit": "iter/sec",
            "range": "stddev: 0.00022299873082214477",
            "extra": "mean: 1.0157404108918953 msec\nrounds: 881"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2147.753724298232,
            "unit": "iter/sec",
            "range": "stddev: 0.00020246617282748623",
            "extra": "mean: 465.60273121013677 usec\nrounds: 785"
          }
        ]
      }
    ]
  }
}