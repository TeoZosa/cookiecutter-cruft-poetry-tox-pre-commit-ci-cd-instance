window.BENCHMARK_DATA = {
  "lastUpdate": 1629126991054,
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
          "id": "f51d9096172e63e48ea3fc148ccf8a1519cd316a",
          "message": "Merge pull request #285 from TeoZosa/dependabot/pip/importlib-metadata-4.6.4\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@04d23f8",
          "timestamp": "2021-08-16T14:41:15Z",
          "tree_id": "a24f62095abb4c26fca4a913c9c6cb3b079b68ed"
        },
        "date": 1629126989597,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 351.84457850760003,
            "unit": "iter/sec",
            "range": "stddev: 0.00006343313884899345",
            "extra": "mean: 2.842164015263914 msec\nrounds: 131"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1031.950575929857,
            "unit": "iter/sec",
            "range": "stddev: 0.0000226409566926591",
            "extra": "mean: 969.0386568164203 usec\nrounds: 880"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2134.945818698648,
            "unit": "iter/sec",
            "range": "stddev: 0.000013088738937122986",
            "extra": "mean: 468.39596173431136 usec\nrounds: 784"
          }
        ]
      }
    ]
  }
}