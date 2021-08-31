window.BENCHMARK_DATA = {
  "lastUpdate": 1630418766253,
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
          "id": "20f1e9079b109395f96722fbd044f55f0960ca42",
          "message": "Merge pull request #311 from TeoZosa/dependabot/pip/hypothesis-6.17.4\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@6299868",
          "timestamp": "2021-08-31T13:32:41Z",
          "tree_id": "7191f093077dd34d357fe67959a48758c9f9e943"
        },
        "date": 1630418762198,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 274.4517219898928,
            "unit": "iter/sec",
            "range": "stddev: 0.0005292347708901711",
            "extra": "mean: 3.643628076914842 msec\nrounds: 117"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 736.0681998132163,
            "unit": "iter/sec",
            "range": "stddev: 0.0007628297285234197",
            "extra": "mean: 1.358569763309648 msec\nrounds: 169"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1637.4313808184552,
            "unit": "iter/sec",
            "range": "stddev: 0.0003614299347573348",
            "extra": "mean: 610.7126147174235 usec\nrounds: 693"
          }
        ]
      }
    ]
  }
}