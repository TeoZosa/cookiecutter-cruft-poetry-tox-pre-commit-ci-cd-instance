window.BENCHMARK_DATA = {
  "lastUpdate": 1629210425933,
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
      },
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
          "id": "d70f6c756154f02c81dd5367c37b3497f7601bc0",
          "message": "Merge pull request #169 from TeoZosa/dependabot/pip/hypothesis-6.14.8",
          "timestamp": "2021-08-17T13:53:52Z",
          "tree_id": "50bf890a7fc816b42e0b56b614df15bda98b99c4"
        },
        "date": 1629210423717,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 353.77815330644165,
            "unit": "iter/sec",
            "range": "stddev: 0.000034338773884947636",
            "extra": "mean: 2.8266301654127375 msec\nrounds: 133"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1019.8330402141502,
            "unit": "iter/sec",
            "range": "stddev: 0.000019547377581454202",
            "extra": "mean: 980.5526596686988 usec\nrounds: 905"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2136.410524102083,
            "unit": "iter/sec",
            "range": "stddev: 0.000012606933860908184",
            "extra": "mean: 468.0748333330236 usec\nrounds: 786"
          }
        ]
      }
    ]
  }
}