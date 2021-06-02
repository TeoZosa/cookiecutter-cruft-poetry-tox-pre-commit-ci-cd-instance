window.BENCHMARK_DATA = {
  "lastUpdate": 1622640397530,
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
          "id": "d2a5f5c56a6fe1c0b835134c454786d0e109f70b",
          "message": "Merge pull request #197 from TeoZosa/dependabot/pip/hypothesis-6.13.11\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@6051928",
          "timestamp": "2021-06-02T13:19:38Z",
          "tree_id": "789b0ccc4773f83c1c4bc31435d768b771d76695",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/d2a5f5c56a6fe1c0b835134c454786d0e109f70b"
        },
        "date": 1622640395432,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 957.6671116254046,
            "unit": "iter/sec",
            "range": "stddev: 0.00021677886940856436",
            "extra": "mean: 1.0442041789476781 msec\nrounds: 475"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1367.6819138940236,
            "unit": "iter/sec",
            "range": "stddev: 0.0001676963402783735",
            "extra": "mean: 731.164161667408 usec\nrounds: 1200"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8644.861253356385,
            "unit": "iter/sec",
            "range": "stddev: 0.0000616958177054927",
            "extra": "mean: 115.67565640359445 usec\nrounds: 2046"
          }
        ]
      }
    ]
  }
}