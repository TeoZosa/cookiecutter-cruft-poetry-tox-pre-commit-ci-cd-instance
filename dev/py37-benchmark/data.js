window.BENCHMARK_DATA = {
  "lastUpdate": 1630935946425,
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
          "id": "6833386f9f7f2e7e481f4c65ec973e96901ad0b8",
          "message": "Merge pull request #206 from TeoZosa/dependabot/github_actions/codecov/codecov-action-2.0.3",
          "timestamp": "2021-09-06T13:24:17Z",
          "tree_id": "b86b8181f4e1e92dd195f7a47efb53b7bf3066d0"
        },
        "date": 1630935888987,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 317.37752707139043,
            "unit": "iter/sec",
            "range": "stddev: 0.0003218943183667539",
            "extra": "mean: 3.150821701925548 msec\nrounds: 104"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 934.1231754002032,
            "unit": "iter/sec",
            "range": "stddev: 0.00015238260106943758",
            "extra": "mean: 1.0705226316342846 msec\nrounds: 942"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1876.831434417481,
            "unit": "iter/sec",
            "range": "stddev: 0.00010628156885422773",
            "extra": "mean: 532.8129003286721 usec\nrounds: 913"
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
          "id": "dfb6f0d64b654fe3c63863ea27d58f69514da482",
          "message": "Merge pull request #321 from TeoZosa/dependabot/pip/hypothesis-6.18.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@40251b5",
          "timestamp": "2021-09-06T13:27:53Z",
          "tree_id": "da6573d7ce8da2e4a60c91d317583beaeae59894"
        },
        "date": 1630935943939,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 250.9448053096934,
            "unit": "iter/sec",
            "range": "stddev: 0.00016783454903218683",
            "extra": "mean: 3.984940030003372 msec\nrounds: 100"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 732.2646704647121,
            "unit": "iter/sec",
            "range": "stddev: 0.0000966876913908499",
            "extra": "mean: 1.365626446740052 msec\nrounds: 629"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1510.8879970276596,
            "unit": "iter/sec",
            "range": "stddev: 0.00010767600786452147",
            "extra": "mean: 661.8624292252506 usec\nrounds: 657"
          }
        ]
      }
    ]
  }
}