window.BENCHMARK_DATA = {
  "lastUpdate": 1627054290341,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "3cc88d002d93e6545639f076b75848a1873d7762",
          "message": "Merge pull request #116 from TeoZosa/dependabot/github_actions/codecov/codecov-action-2.0.1",
          "timestamp": "2021-07-23T15:23:47Z",
          "tree_id": "a446c34bf246118a5bbc7c6e80cbb935b09d42ec"
        },
        "date": 1627054288830,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1306.1118077962747,
            "unit": "iter/sec",
            "range": "stddev: 0.00009000393078905797",
            "extra": "mean: 765.6312377171147 usec\nrounds: 631"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1945.5461131548643,
            "unit": "iter/sec",
            "range": "stddev: 0.00007197140496371376",
            "extra": "mean: 513.9944991478084 usec\nrounds: 1759"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 17014.657987957646,
            "unit": "iter/sec",
            "range": "stddev: 0.000009238700846666075",
            "extra": "mean: 58.77285342483895 usec\nrounds: 2190"
          }
        ]
      }
    ]
  }
}