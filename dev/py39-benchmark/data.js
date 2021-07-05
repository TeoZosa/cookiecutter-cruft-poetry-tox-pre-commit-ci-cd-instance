window.BENCHMARK_DATA = {
  "lastUpdate": 1625492317417,
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
          "id": "2e1f63803057ae04284381f4f94b8eb68194c0df",
          "message": "Merge pull request #239 from TeoZosa/dependabot/pip/hypothesis-6.14.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@c4d04e3",
          "timestamp": "2021-07-05T13:28:35Z",
          "tree_id": "406cddef54f9e28e5a1b0a60611c7168872580b3"
        },
        "date": 1625492316256,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1419.715330209126,
            "unit": "iter/sec",
            "range": "stddev: 0.000023555707818714116",
            "extra": "mean: 704.3665576624425 usec\nrounds: 633"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 2072.9441151124456,
            "unit": "iter/sec",
            "range": "stddev: 0.00001594990112076221",
            "extra": "mean: 482.4056725454731 usec\nrounds: 1701"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 16765.593433171176,
            "unit": "iter/sec",
            "range": "stddev: 0.000004941449273245667",
            "extra": "mean: 59.645965052538685 usec\nrounds: 2003"
          }
        ]
      }
    ]
  }
}