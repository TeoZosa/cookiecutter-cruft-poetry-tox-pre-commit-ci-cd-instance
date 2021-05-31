window.BENCHMARK_DATA = {
  "lastUpdate": 1622468287209,
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
          "id": "24f1cca2531a535fe8d4d3d1925fd66c33689859",
          "message": "Merge pull request #193 from TeoZosa/dependabot/pip/hypothesis-6.13.10\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@db48f31",
          "timestamp": "2021-05-31T13:31:19Z",
          "tree_id": "2a581f9c9c650e902233c54e70869ac326eb63f2",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/24f1cca2531a535fe8d4d3d1925fd66c33689859"
        },
        "date": 1622468285777,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1256.3390033628232,
            "unit": "iter/sec",
            "range": "stddev: 0.000018736780168222338",
            "extra": "mean: 795.9635077183113 usec\nrounds: 583"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1856.4174490479688,
            "unit": "iter/sec",
            "range": "stddev: 0.000014392357160363486",
            "extra": "mean: 538.6719460716298 usec\nrounds: 1502"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13545.282722758273,
            "unit": "iter/sec",
            "range": "stddev: 0.00000503553042536291",
            "extra": "mean: 73.82643983649287 usec\nrounds: 1712"
          }
        ]
      }
    ]
  }
}