window.BENCHMARK_DATA = {
  "lastUpdate": 1624889818219,
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
          "id": "1d0bb67b691af577e5d7eff5c1112ad8ca1f9349",
          "message": "Merge pull request #227 from TeoZosa/dependabot/pip/importlib-metadata-4.6.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@6241b31",
          "timestamp": "2021-06-28T13:52:25Z",
          "tree_id": "909e89b748831183bb75ac4eb6862a6199b60656"
        },
        "date": 1624889816714,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1392.0324147868898,
            "unit": "iter/sec",
            "range": "stddev: 0.000014801121539237134",
            "extra": "mean: 718.3740761906703 usec\nrounds: 630"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 2056.7057317135946,
            "unit": "iter/sec",
            "range": "stddev: 0.000015215752433057786",
            "extra": "mean: 486.2144275578138 usec\nrounds: 1691"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 16256.398830118103,
            "unit": "iter/sec",
            "range": "stddev: 0.000004238890959588255",
            "extra": "mean: 61.514238820673356 usec\nrounds: 1968"
          }
        ]
      }
    ]
  }
}