window.BENCHMARK_DATA = {
  "lastUpdate": 1630418666237,
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
        "date": 1630418663447,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 285.24645459189014,
            "unit": "iter/sec",
            "range": "stddev: 0.00028824661843551827",
            "extra": "mean: 3.505740330517787 msec\nrounds: 118"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 831.5272538881271,
            "unit": "iter/sec",
            "range": "stddev: 0.0001598061633109252",
            "extra": "mean: 1.2026064032466928 msec\nrounds: 739"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1697.952370989683,
            "unit": "iter/sec",
            "range": "stddev: 0.00009964339937055729",
            "extra": "mean: 588.9446707018828 usec\nrounds: 744"
          }
        ]
      }
    ]
  }
}