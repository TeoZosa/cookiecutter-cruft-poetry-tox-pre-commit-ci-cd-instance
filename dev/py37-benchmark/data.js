window.BENCHMARK_DATA = {
  "lastUpdate": 1629210169955,
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
          "id": "fa516b23320004be83bc9c930c086371c02d7941",
          "message": "Merge pull request #168 from TeoZosa/dependabot/pip/icontract-2.5.4",
          "timestamp": "2021-08-17T13:40:41Z",
          "tree_id": "e1ab35bd28467e56ab609384ff729a815aae04dd"
        },
        "date": 1629210167690,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 280.6288210887932,
            "unit": "iter/sec",
            "range": "stddev: 0.0003738131173347698",
            "extra": "mean: 3.5634258666667455 msec\nrounds: 105"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 832.7803959691789,
            "unit": "iter/sec",
            "range": "stddev: 0.00016018148227747492",
            "extra": "mean: 1.2007967584734187 msec\nrounds: 708"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1596.801102894177,
            "unit": "iter/sec",
            "range": "stddev: 0.00011516013241676268",
            "extra": "mean: 626.2520724638251 usec\nrounds: 621"
          }
        ]
      }
    ]
  }
}