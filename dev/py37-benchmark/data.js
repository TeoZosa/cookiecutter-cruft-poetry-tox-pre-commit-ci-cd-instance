window.BENCHMARK_DATA = {
  "lastUpdate": 1622468764451,
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
          "id": "efae57f0bbe215ccced8c1d118b45fb212f7544a",
          "message": "Merge pull request #192 from TeoZosa/dependabot/pip/importlib-metadata-4.3.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@7f13f3e",
          "timestamp": "2021-05-31T13:38:56Z",
          "tree_id": "efa8c7e7dfdce338070b9b013b7a1fc4f77f0730",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/efae57f0bbe215ccced8c1d118b45fb212f7544a"
        },
        "date": 1622468762035,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 936.4127445324955,
            "unit": "iter/sec",
            "range": "stddev: 0.00022061032573168597",
            "extra": "mean: 1.0679051581033856 msec\nrounds: 506"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1308.0945132896268,
            "unit": "iter/sec",
            "range": "stddev: 0.00015645296682015953",
            "extra": "mean: 764.4707548579013 usec\nrounds: 1338"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8506.474740366397,
            "unit": "iter/sec",
            "range": "stddev: 0.000030442144997131866",
            "extra": "mean: 117.55751125135619 usec\nrounds: 1111"
          }
        ]
      }
    ]
  }
}