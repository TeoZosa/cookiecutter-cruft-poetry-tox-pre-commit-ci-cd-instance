window.BENCHMARK_DATA = {
  "lastUpdate": 1626703758727,
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
          "id": "a65ca5bde544a7954d9f55255216a5d4f96cf223",
          "message": "Merge pull request #249 from TeoZosa/dependabot/pip/emoji-1.4.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@1ba6dd7",
          "timestamp": "2021-07-19T13:49:19Z",
          "tree_id": "de83dfeaa4602dcff4ecfbbcb48b10574e2c6fbe"
        },
        "date": 1626703756338,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1227.2126653187925,
            "unit": "iter/sec",
            "range": "stddev: 0.000014449543981306023",
            "extra": "mean: 814.8546932900423 usec\nrounds: 626"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1770.730254796008,
            "unit": "iter/sec",
            "range": "stddev: 0.000015701565897692622",
            "extra": "mean: 564.7387552629817 usec\nrounds: 1520"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13413.56074213955,
            "unit": "iter/sec",
            "range": "stddev: 0.000006247497927593829",
            "extra": "mean: 74.55141995655461 usec\nrounds: 1824"
          }
        ]
      }
    ]
  }
}