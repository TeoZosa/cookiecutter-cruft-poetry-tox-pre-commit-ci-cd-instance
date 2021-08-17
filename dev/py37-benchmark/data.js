window.BENCHMARK_DATA = {
  "lastUpdate": 1629209180265,
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
          "id": "f26d8aad84b3caefb444b820161507f426c17bd2",
          "message": "Merge pull request #167 from TeoZosa/dependabot/github_actions/crazy-max/ghaction-github-labeler-3.1.1",
          "timestamp": "2021-08-17T13:35:48Z",
          "tree_id": "d47a86a7cdf0dda860c9ad6e86903d00eab534bc"
        },
        "date": 1629209177988,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 304.30368408095256,
            "unit": "iter/sec",
            "range": "stddev: 0.00004616332568202272",
            "extra": "mean: 3.2861909083360765 msec\nrounds: 120"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 891.5480944233901,
            "unit": "iter/sec",
            "range": "stddev: 0.000036720050795223524",
            "extra": "mean: 1.1216444813857755 msec\nrounds: 779"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1839.4785185280198,
            "unit": "iter/sec",
            "range": "stddev: 0.000023887240834022562",
            "extra": "mean: 543.6323337987204 usec\nrounds: 719"
          }
        ]
      }
    ]
  }
}