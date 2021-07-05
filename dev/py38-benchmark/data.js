window.BENCHMARK_DATA = {
  "lastUpdate": 1625492813477,
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
          "id": "cce6e4b0c452313c714ca744111f112b27df56b6",
          "message": "Merge pull request #240 from TeoZosa/dependabot/pip/importlib-metadata-4.6.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@dd05354",
          "timestamp": "2021-07-05T13:39:05Z",
          "tree_id": "7a64078b1b0cb085015285b3957c73d31375459b"
        },
        "date": 1625492811294,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 950.0996543352436,
            "unit": "iter/sec",
            "range": "stddev: 0.00007683987446423866",
            "extra": "mean: 1.052521170213108 msec\nrounds: 517"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1333.637305161346,
            "unit": "iter/sec",
            "range": "stddev: 0.00015419469924980104",
            "extra": "mean: 749.8290548186325 usec\nrounds: 1131"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8019.202000970821,
            "unit": "iter/sec",
            "range": "stddev: 0.00012054006431234462",
            "extra": "mean: 124.70068716051021 usec\nrounds: 1659"
          }
        ]
      }
    ]
  }
}