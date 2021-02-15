window.BENCHMARK_DATA = {
  "lastUpdate": 1613399487563,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action",
            "username": "actions-user"
          },
          "distinct": true,
          "id": "6877aca931f336d313425657aefc3a575c182348",
          "message": "Merge pull request #65 from TeoZosa/dependabot/pip/dot-github/workflows/pre-commit-2.10.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@bbe7ba7",
          "timestamp": "2021-02-15T14:27:27Z",
          "tree_id": "3b2edabf1248ca0cd37fc6b16075f4fda85cb765",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/6877aca931f336d313425657aefc3a575c182348"
        },
        "date": 1613399483402,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1093.215355112501,
            "unit": "iter/sec",
            "range": "stddev: 0.00021401572168612993",
            "extra": "mean: 914.7328523363923 usec\nrounds: 535"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1718.110468413616,
            "unit": "iter/sec",
            "range": "stddev: 0.00006345435775661275",
            "extra": "mean: 582.0347517720037 usec\nrounds: 1269"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 10773.2956417378,
            "unit": "iter/sec",
            "range": "stddev: 0.000025714812290258986",
            "extra": "mean: 92.82210692574048 usec\nrounds: 1964"
          }
        ]
      }
    ]
  }
}