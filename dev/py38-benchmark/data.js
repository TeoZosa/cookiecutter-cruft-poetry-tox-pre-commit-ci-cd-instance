window.BENCHMARK_DATA = {
  "lastUpdate": 1625492340813,
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
        "date": 1625492339420,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 961.1320750597378,
            "unit": "iter/sec",
            "range": "stddev: 0.0001600852484205306",
            "extra": "mean: 1.0404397334651916 msec\nrounds: 499"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1345.7320923599816,
            "unit": "iter/sec",
            "range": "stddev: 0.00011708357144158645",
            "extra": "mean: 743.089955034305 usec\nrounds: 934"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8099.1987897554045,
            "unit": "iter/sec",
            "range": "stddev: 0.0000326713053204417",
            "extra": "mean: 123.46900304075633 usec\nrounds: 1645"
          }
        ]
      }
    ]
  }
}