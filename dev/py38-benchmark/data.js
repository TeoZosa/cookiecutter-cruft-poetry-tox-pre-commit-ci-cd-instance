window.BENCHMARK_DATA = {
  "lastUpdate": 1629208681089,
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
          "id": "ffc1e36c6499246f9fbca81f62e92589d37556c6",
          "message": "Merge pull request #166 from TeoZosa/dependabot/github_actions/actions/setup-node-2.4.0",
          "timestamp": "2021-08-17T13:24:20Z",
          "tree_id": "f2948ca734a7c50c1b95718df2a79591e7aa272b"
        },
        "date": 1629208679426,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 414.2850260599162,
            "unit": "iter/sec",
            "range": "stddev: 0.00009489011683202209",
            "extra": "mean: 2.413797113331763 msec\nrounds: 150"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1220.108719631518,
            "unit": "iter/sec",
            "range": "stddev: 0.00004410966756931003",
            "extra": "mean: 819.5990930234541 usec\nrounds: 1118"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2507.0221986860975,
            "unit": "iter/sec",
            "range": "stddev: 0.000011925776732562514",
            "extra": "mean: 398.8795952920117 usec\nrounds: 892"
          }
        ]
      }
    ]
  }
}