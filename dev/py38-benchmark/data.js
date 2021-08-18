window.BENCHMARK_DATA = {
  "lastUpdate": 1629266982792,
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
        "date": 1629266980310,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 256.1272656861878,
            "unit": "iter/sec",
            "range": "stddev: 0.0009634839226217766",
            "extra": "mean: 3.9043090446497786 msec\nrounds: 112"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 787.5279134869172,
            "unit": "iter/sec",
            "range": "stddev: 0.00014487905681915002",
            "extra": "mean: 1.2697962610268958 msec\nrounds: 544"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1603.05783571022,
            "unit": "iter/sec",
            "range": "stddev: 0.00011440177723964678",
            "extra": "mean: 623.8078113737919 usec\nrounds: 721"
          }
        ]
      }
    ]
  }
}