window.BENCHMARK_DATA = {
  "lastUpdate": 1630077764970,
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
          "id": "9e33a8c25ff70c2a8c88cbb8eeedf5aee458403b",
          "message": "Merge pull request #304 from TeoZosa/dependabot/pip/importlib-metadata-4.7.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@ef2ec6f",
          "timestamp": "2021-08-27T14:18:30Z",
          "tree_id": "7a7b277feba47a81384faeb8dd09a2d4cce8b854"
        },
        "date": 1630077762364,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 269.40437151129146,
            "unit": "iter/sec",
            "range": "stddev: 0.00013813705553481964",
            "extra": "mean: 3.711892254718247 msec\nrounds: 106"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 766.4696714240706,
            "unit": "iter/sec",
            "range": "stddev: 0.00012734171698018884",
            "extra": "mean: 1.3046830648133005 msec\nrounds: 648"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1608.0215238037385,
            "unit": "iter/sec",
            "range": "stddev: 0.000053635156005990235",
            "extra": "mean: 621.8822230902249 usec\nrounds: 641"
          }
        ]
      }
    ]
  }
}