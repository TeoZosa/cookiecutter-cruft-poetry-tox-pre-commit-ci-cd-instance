window.BENCHMARK_DATA = {
  "lastUpdate": 1633354997596,
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
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "d7eeca1d9e67b4f46517bd1680a8ad8a1193af48",
          "message": "Merge pull request #362 from TeoZosa/streamline-and-expand-performance-testing-workflow\n\n👷‍♀️ Streamline and Expand Performance Testing\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@587e34c",
          "timestamp": "2021-10-01T21:00:00Z",
          "tree_id": "ea2e1a176cf76eab14a790bf919b66f4f819c49c"
        },
        "date": 1633123072584,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 283.95358145249065,
            "unit": "iter/sec",
            "range": "stddev: 0.000508309997526719",
            "extra": "mean: 3.5217023672839773 msec\nrounds: 324"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 835.6580908444348,
            "unit": "iter/sec",
            "range": "stddev: 0.0001980484702419776",
            "extra": "mean: 1.1966616621751334 msec\nrounds: 1039"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1619.7626026505322,
            "unit": "iter/sec",
            "range": "stddev: 0.00011209289024630083",
            "extra": "mean: 617.3744216366208 usec\nrounds: 2163"
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
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "7d9bcdecca698f0b988fa7e33cf25bd2f133f879",
          "message": "Merge pull request #363 from TeoZosa/dependabot/pip/structlog-sentry-logger-0.11.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@8bb3f64",
          "timestamp": "2021-10-04T13:20:51Z",
          "tree_id": "c832f23ee0ee4150e089be6ed5cfdd673df85835"
        },
        "date": 1633354995174,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 374.21258930963,
            "unit": "iter/sec",
            "range": "stddev: 0.000047681040356203845",
            "extra": "mean: 2.6722778136482805 msec\nrounds: 381"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1096.489737830554,
            "unit": "iter/sec",
            "range": "stddev: 0.00001135351350907191",
            "extra": "mean: 912.0012394995483 usec\nrounds: 1119"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2230.528154932098,
            "unit": "iter/sec",
            "range": "stddev: 0.0000207827194499538",
            "extra": "mean: 448.324311795312 usec\nrounds: 2306"
          }
        ]
      }
    ]
  }
}