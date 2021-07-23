window.BENCHMARK_DATA = {
  "lastUpdate": 1627046971646,
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
        "date": 1627046970250,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1284.1030270721153,
            "unit": "iter/sec",
            "range": "stddev: 0.00001609328046766251",
            "extra": "mean: 778.7537128388374 usec\nrounds: 592"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1857.8446097272545,
            "unit": "iter/sec",
            "range": "stddev: 0.00001945278511719548",
            "extra": "mean: 538.2581485901599 usec\nrounds: 1595"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13728.651032321355,
            "unit": "iter/sec",
            "range": "stddev: 0.0000059558925875263856",
            "extra": "mean: 72.84036848527221 usec\nrounds: 1612"
          }
        ]
      }
    ]
  }
}