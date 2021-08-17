window.BENCHMARK_DATA = {
  "lastUpdate": 1629210453188,
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
        "date": 1629210451411,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 289.93508669494815,
            "unit": "iter/sec",
            "range": "stddev: 0.0007474201409016385",
            "extra": "mean: 3.4490478934415356 msec\nrounds: 122"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 869.1703342755984,
            "unit": "iter/sec",
            "range": "stddev: 0.00027320090914492674",
            "extra": "mean: 1.1505224701823726 msec\nrounds: 436"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1768.284035255717,
            "unit": "iter/sec",
            "range": "stddev: 0.00020919134326547842",
            "extra": "mean: 565.5200070023744 usec\nrounds: 714"
          }
        ]
      }
    ]
  }
}