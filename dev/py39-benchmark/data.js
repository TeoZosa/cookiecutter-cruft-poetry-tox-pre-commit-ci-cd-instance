window.BENCHMARK_DATA = {
  "lastUpdate": 1631713990741,
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
          "id": "845d724548a96cb34eb3585010e48412d1f4c61f",
          "message": "Merge pull request #225 from TeoZosa/dependabot/pip/hypothesis-6.21.3",
          "timestamp": "2021-09-15T13:28:06Z",
          "tree_id": "081bca677c9f4d73d14d5640b26fca40d81d51e1"
        },
        "date": 1631713988250,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 279.0661677048369,
            "unit": "iter/sec",
            "range": "stddev: 0.0003796758251610354",
            "extra": "mean: 3.583379555552866 msec\nrounds: 117"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 799.5336254865298,
            "unit": "iter/sec",
            "range": "stddev: 0.00024838896988685474",
            "extra": "mean: 1.2507291352399132 msec\nrounds: 769"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1672.2746764642654,
            "unit": "iter/sec",
            "range": "stddev: 0.00011350658846162008",
            "extra": "mean: 597.9878868430433 usec\nrounds: 760"
          }
        ]
      }
    ]
  }
}