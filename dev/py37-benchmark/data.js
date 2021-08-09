window.BENCHMARK_DATA = {
  "lastUpdate": 1628520831607,
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
          "id": "dc8f646a9a657bf2459a1c7bdb7eb3c600746cb6",
          "message": "Merge pull request #276 from TeoZosa/dependabot/pip/hypothesis-6.14.6\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@3623d72",
          "timestamp": "2021-08-09T13:33:57Z",
          "tree_id": "8a464aae9b3dc1c2c8b8c8fcf255cdfea81a44a4"
        },
        "date": 1628520828915,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 275.6804029735285,
            "unit": "iter/sec",
            "range": "stddev: 0.00034561056744967974",
            "extra": "mean: 3.6273887777798355 msec\nrounds: 108"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 780.595048957701,
            "unit": "iter/sec",
            "range": "stddev: 0.0002688285850852369",
            "extra": "mean: 1.2810739721386424 msec\nrounds: 682"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1602.620415859391,
            "unit": "iter/sec",
            "range": "stddev: 0.0001159702298581008",
            "extra": "mean: 623.9780737248121 usec\nrounds: 746"
          }
        ]
      }
    ]
  }
}