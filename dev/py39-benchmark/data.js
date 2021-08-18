window.BENCHMARK_DATA = {
  "lastUpdate": 1629266857262,
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
          "id": "a077183437e1ffc4b40e90fb37d8c8d72a2e65d1",
          "message": "Merge pull request #164 from TeoZosa/dependabot/pip/importlib-metadata-4.6.4",
          "timestamp": "2021-08-18T06:00:28Z",
          "tree_id": "f9de06dbc11c95d29d4e028b2eea2fb98f5204f9"
        },
        "date": 1629266855010,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 354.7027093819924,
            "unit": "iter/sec",
            "range": "stddev: 0.0001603930830490133",
            "extra": "mean: 2.8192623669053036 msec\nrounds: 139"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1020.1509449929703,
            "unit": "iter/sec",
            "range": "stddev: 0.0000857194909866714",
            "extra": "mean: 980.2470947148814 usec\nrounds: 908"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2194.440263911194,
            "unit": "iter/sec",
            "range": "stddev: 0.000052676502170197205",
            "extra": "mean: 455.69707065877486 usec\nrounds: 835"
          }
        ]
      }
    ]
  }
}