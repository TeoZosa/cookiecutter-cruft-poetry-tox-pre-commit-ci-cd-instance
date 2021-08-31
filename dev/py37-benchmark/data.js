window.BENCHMARK_DATA = {
  "lastUpdate": 1630418609902,
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
        "date": 1630418607285,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 284.8790596517691,
            "unit": "iter/sec",
            "range": "stddev: 0.0004098198078105729",
            "extra": "mean: 3.510261516667394 msec\nrounds: 120"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 811.0278054697853,
            "unit": "iter/sec",
            "range": "stddev: 0.0003057593880655107",
            "extra": "mean: 1.23300334865924 msec\nrounds: 783"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1634.6441315157215,
            "unit": "iter/sec",
            "range": "stddev: 0.00011714472350631438",
            "extra": "mean: 611.7539473700318 usec\nrounds: 760"
          }
        ]
      }
    ]
  }
}