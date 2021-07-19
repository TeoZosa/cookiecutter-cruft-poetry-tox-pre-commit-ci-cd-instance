window.BENCHMARK_DATA = {
  "lastUpdate": 1626703446491,
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
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "e78ae1ed6f334939cda5789facd2dc526759e7f0",
          "message": "Merge pull request #111 from TeoZosa/dependabot/pip/hypothesis-6.14.3",
          "timestamp": "2021-07-19T13:31:12Z",
          "tree_id": "3d21fbc5e0ff7282e43a40890a214525ad8989ad"
        },
        "date": 1626703443124,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1225.645445952978,
            "unit": "iter/sec",
            "range": "stddev: 0.00001553304016805366",
            "extra": "mean: 815.896639033704 usec\nrounds: 579"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1764.1845847176412,
            "unit": "iter/sec",
            "range": "stddev: 0.000016962202480953904",
            "extra": "mean: 566.834110592827 usec\nrounds: 1501"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13532.262251205639,
            "unit": "iter/sec",
            "range": "stddev: 0.000004801431775645591",
            "extra": "mean: 73.89747415742747 usec\nrounds: 1780"
          }
        ]
      }
    ]
  }
}