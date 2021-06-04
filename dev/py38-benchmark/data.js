window.BENCHMARK_DATA = {
  "lastUpdate": 1622813787671,
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
          "id": "9229c6a28b743764f179d3d65adca76aff72012d",
          "message": "Merge pull request #201 from TeoZosa/dependabot/pip/importlib-metadata-4.5.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@398d111",
          "timestamp": "2021-06-04T13:29:39Z",
          "tree_id": "0fcf175b38fdb87ae1846d1e2099309c3125f4d2",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/9229c6a28b743764f179d3d65adca76aff72012d"
        },
        "date": 1622813785519,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1049.1026341923364,
            "unit": "iter/sec",
            "range": "stddev: 0.00016202968815412182",
            "extra": "mean: 953.1955858349944 usec\nrounds: 466"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1444.4900490721122,
            "unit": "iter/sec",
            "range": "stddev: 0.00019965801095122294",
            "extra": "mean: 692.2858351584794 usec\nrounds: 1280"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8570.364840160939,
            "unit": "iter/sec",
            "range": "stddev: 0.000056268847294783174",
            "extra": "mean: 116.68114702818433 usec\nrounds: 925"
          }
        ]
      }
    ]
  }
}