window.BENCHMARK_DATA = {
  "lastUpdate": 1625146408858,
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
          "id": "ad6a0b39aa7c7ee2e80ce1ad2f8e7e2002a61102",
          "message": "Merge pull request #236 from TeoZosa/dependabot/pip/dot-github/workflows/cruft-2.9.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@5e25fa4",
          "timestamp": "2021-07-01T13:20:18Z",
          "tree_id": "80ca54ff6e786e7bffa5e84292ebfedcba4030a8"
        },
        "date": 1625146406862,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 975.9639443625671,
            "unit": "iter/sec",
            "range": "stddev: 0.0002619836693759992",
            "extra": "mean: 1.0246280160002545 msec\nrounds: 375"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1403.0903404984265,
            "unit": "iter/sec",
            "range": "stddev: 0.00010049026958980809",
            "extra": "mean: 712.7124826793158 usec\nrounds: 1328"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8784.768240649852,
            "unit": "iter/sec",
            "range": "stddev: 0.00003573798453774065",
            "extra": "mean: 113.83339578302015 usec\nrounds: 1660"
          }
        ]
      }
    ]
  }
}