window.BENCHMARK_DATA = {
  "lastUpdate": 1627046978986,
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
          "id": "8a852f763cf4a775fe37d39bc099d5e027f2a808",
          "message": "Merge pull request #126 from TeoZosa/dependabot/pip/icontract-hypothesis-1.1.7",
          "timestamp": "2021-07-23T13:23:50Z",
          "tree_id": "52520372e3355b347facbdbae026a8207854014c"
        },
        "date": 1627046977512,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1299.381521185401,
            "unit": "iter/sec",
            "range": "stddev: 0.00008252982060723826",
            "extra": "mean: 769.5969072176116 usec\nrounds: 582"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1942.7883697528139,
            "unit": "iter/sec",
            "range": "stddev: 0.0000652233931825643",
            "extra": "mean: 514.7241025162368 usec\nrounds: 1590"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 15621.37661719489,
            "unit": "iter/sec",
            "range": "stddev: 0.000011357843348956116",
            "extra": "mean: 64.01484481843116 usec\nrounds: 1727"
          }
        ]
      }
    ]
  }
}