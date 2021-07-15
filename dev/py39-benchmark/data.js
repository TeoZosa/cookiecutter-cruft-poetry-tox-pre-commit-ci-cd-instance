window.BENCHMARK_DATA = {
  "lastUpdate": 1626356931421,
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
          "id": "87d22c25105b76081d8a9b6375ff6078e4135775",
          "message": "Merge pull request #246 from TeoZosa/dependabot/pip/sphinx-4.1.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@aaa8297",
          "timestamp": "2021-07-15T13:25:05Z",
          "tree_id": "159775871215a2ac15b3a5c98f84b1a27c5a910c"
        },
        "date": 1626356928914,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 914.7035793929542,
            "unit": "iter/sec",
            "range": "stddev: 0.00043361831235839255",
            "extra": "mean: 1.0932503409067809 msec\nrounds: 484"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1333.905939735417,
            "unit": "iter/sec",
            "range": "stddev: 0.0002023049991737449",
            "extra": "mean: 749.6780471630198 usec\nrounds: 1251"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8475.706703325044,
            "unit": "iter/sec",
            "range": "stddev: 0.00005384818434381835",
            "extra": "mean: 117.98426196221455 usec\nrounds: 1672"
          }
        ]
      }
    ]
  }
}