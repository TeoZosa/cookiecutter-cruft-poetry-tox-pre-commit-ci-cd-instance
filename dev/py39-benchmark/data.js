window.BENCHMARK_DATA = {
  "lastUpdate": 1629210541110,
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
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "d70f6c756154f02c81dd5367c37b3497f7601bc0",
          "message": "Merge pull request #169 from TeoZosa/dependabot/pip/hypothesis-6.14.8",
          "timestamp": "2021-08-17T13:53:52Z",
          "tree_id": "50bf890a7fc816b42e0b56b614df15bda98b99c4"
        },
        "date": 1629210538673,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 284.2910789256019,
            "unit": "iter/sec",
            "range": "stddev: 0.0002766243212003944",
            "extra": "mean: 3.5175215619822415 msec\nrounds: 121"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 788.9401054548557,
            "unit": "iter/sec",
            "range": "stddev: 0.0003198041737757115",
            "extra": "mean: 1.2675233431357376 msec\nrounds: 714"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1651.717052036597,
            "unit": "iter/sec",
            "range": "stddev: 0.00007374925398334774",
            "extra": "mean: 605.4305722441879 usec\nrounds: 699"
          }
        ]
      }
    ]
  }
}