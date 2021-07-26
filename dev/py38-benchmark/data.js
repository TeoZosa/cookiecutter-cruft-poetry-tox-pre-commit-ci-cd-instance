window.BENCHMARK_DATA = {
  "lastUpdate": 1627309211306,
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
          "id": "52ca2a9f9966ed5365828d076cf3f305c0cabc4f",
          "message": "Merge pull request #253 from TeoZosa/dependabot/pip/dot-github/workflows/pip-21.2.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@61a7f4f",
          "timestamp": "2021-07-26T13:35:30Z",
          "tree_id": "35534a254f672da3cdc47edefe1a23e336faf97e"
        },
        "date": 1627309204804,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 938.8861011881604,
            "unit": "iter/sec",
            "range": "stddev: 0.00016864524708446873",
            "extra": "mean: 1.065091919812744 msec\nrounds: 424"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1271.1047277014948,
            "unit": "iter/sec",
            "range": "stddev: 0.0009714857555163864",
            "extra": "mean: 786.7172375389348 usec\nrounds: 1284"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8731.799507456311,
            "unit": "iter/sec",
            "range": "stddev: 0.000053423902706098666",
            "extra": "mean: 114.52393050780357 usec\nrounds: 2029"
          }
        ]
      }
    ]
  }
}