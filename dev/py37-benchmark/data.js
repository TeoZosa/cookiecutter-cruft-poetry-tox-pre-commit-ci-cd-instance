window.BENCHMARK_DATA = {
  "lastUpdate": 1630420103825,
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
          "id": "28c1ea217a9e711a3f0acc44acd06cb275bbd007",
          "message": "Merge pull request #312 from TeoZosa/dependabot/pip/pytest-6.2.5\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@2c4c6a3",
          "timestamp": "2021-08-31T13:59:14Z",
          "tree_id": "6f00cd90ee0895aec069a49b0d08e8d15e720fae"
        },
        "date": 1630420101098,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 276.119323763035,
            "unit": "iter/sec",
            "range": "stddev: 0.00025535176970149055",
            "extra": "mean: 3.6216226607095336 msec\nrounds: 112"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 809.90943992606,
            "unit": "iter/sec",
            "range": "stddev: 0.00009211592266007658",
            "extra": "mean: 1.2347059445205308 msec\nrounds: 739"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1620.1078534092867,
            "unit": "iter/sec",
            "range": "stddev: 0.0001461244552886572",
            "extra": "mean: 617.2428569466175 usec\nrounds: 727"
          }
        ]
      }
    ]
  }
}