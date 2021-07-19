window.BENCHMARK_DATA = {
  "lastUpdate": 1626703455633,
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
        "date": 1626703453118,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1274.2622064249192,
            "unit": "iter/sec",
            "range": "stddev: 0.000019399245573728475",
            "extra": "mean: 784.7678405260158 usec\nrounds: 533"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1871.7418529055644,
            "unit": "iter/sec",
            "range": "stddev: 0.00001595676779890887",
            "extra": "mean: 534.2617083908597 usec\nrounds: 1454"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13715.667209558273,
            "unit": "iter/sec",
            "range": "stddev: 0.000004202025379073056",
            "extra": "mean: 72.90932221679401 usec\nrounds: 1859"
          }
        ]
      }
    ]
  }
}