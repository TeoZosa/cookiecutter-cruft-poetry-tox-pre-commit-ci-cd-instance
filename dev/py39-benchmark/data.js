window.BENCHMARK_DATA = {
  "lastUpdate": 1630935827883,
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
          "id": "dfb6f0d64b654fe3c63863ea27d58f69514da482",
          "message": "Merge pull request #321 from TeoZosa/dependabot/pip/hypothesis-6.18.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@40251b5",
          "timestamp": "2021-09-06T13:27:53Z",
          "tree_id": "da6573d7ce8da2e4a60c91d317583beaeae59894"
        },
        "date": 1630935826203,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 373.1936146198802,
            "unit": "iter/sec",
            "range": "stddev: 0.000024769024518056886",
            "extra": "mean: 2.6795742500003903 msec\nrounds: 144"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1061.9124334677074,
            "unit": "iter/sec",
            "range": "stddev: 0.000015845151055880666",
            "extra": "mean: 941.6972327317701 usec\nrounds: 941"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2282.5552797419396,
            "unit": "iter/sec",
            "range": "stddev: 0.000010972822233050681",
            "extra": "mean: 438.10549031393344 usec\nrounds: 826"
          }
        ]
      }
    ]
  }
}