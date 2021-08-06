window.BENCHMARK_DATA = {
  "lastUpdate": 1628293719459,
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
          "id": "e86321c065ffa8065b9ebf6fbd008987c1198448",
          "message": "Merge pull request #147 from TeoZosa/dependabot/pip/typer-cli-0.0.12",
          "timestamp": "2021-08-06T23:40:27Z",
          "tree_id": "c54c718e02c46654c9bc9965df27b3da7e89690c"
        },
        "date": 1628293717438,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1226.4619939196418,
            "unit": "iter/sec",
            "range": "stddev: 0.000014058181272040242",
            "extra": "mean: 815.3534352940743 usec\nrounds: 595"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1719.057934599751,
            "unit": "iter/sec",
            "range": "stddev: 0.000023563715025806994",
            "extra": "mean: 581.7139608112338 usec\nrounds: 1531"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13399.35566397996,
            "unit": "iter/sec",
            "range": "stddev: 0.000004592763534360466",
            "extra": "mean: 74.6304542604382 usec\nrounds: 1913"
          }
        ]
      }
    ]
  }
}