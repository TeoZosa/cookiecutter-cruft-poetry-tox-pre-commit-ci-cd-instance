window.BENCHMARK_DATA = {
  "lastUpdate": 1626270727880,
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
          "id": "e8361ae2428d19ac5f556a567364fd0013c158f3",
          "message": "Merge pull request #245 from TeoZosa/dependabot/pip/tox-3.24.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@8d1d5c1",
          "timestamp": "2021-07-14T13:28:00Z",
          "tree_id": "0136d7f92518784c44661cb5658a0ed3adac6248"
        },
        "date": 1626270726069,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1225.7472712314116,
            "unit": "iter/sec",
            "range": "stddev: 0.00008614148472824913",
            "extra": "mean: 815.828860867362 usec\nrounds: 575"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1797.9723171869502,
            "unit": "iter/sec",
            "range": "stddev: 0.00006703511884871165",
            "extra": "mean: 556.1820893686328 usec\nrounds: 1298"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 12521.974420559778,
            "unit": "iter/sec",
            "range": "stddev: 0.000009604599400975455",
            "extra": "mean: 79.85961050663896 usec\nrounds: 1656"
          }
        ]
      }
    ]
  }
}