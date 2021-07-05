window.BENCHMARK_DATA = {
  "lastUpdate": 1625492758620,
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
        "date": 1625492757470,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1230.237532187205,
            "unit": "iter/sec",
            "range": "stddev: 0.000014611023240984766",
            "extra": "mean: 812.8511558431549 usec\nrounds: 616"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1746.142082623197,
            "unit": "iter/sec",
            "range": "stddev: 0.00001854218926235552",
            "extra": "mean: 572.6910827884742 usec\nrounds: 1377"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13625.400992220048,
            "unit": "iter/sec",
            "range": "stddev: 0.0000043724153312539545",
            "extra": "mean: 73.3923354307876 usec\nrounds: 1908"
          }
        ]
      }
    ]
  }
}