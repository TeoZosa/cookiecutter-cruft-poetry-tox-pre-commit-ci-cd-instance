window.BENCHMARK_DATA = {
  "lastUpdate": 1624890179022,
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
          "id": "3079c924eb715e2d19da46d374b8a039af044481",
          "message": "Merge pull request #84 from TeoZosa/dependabot/pip/xdoctest-0.15.5",
          "timestamp": "2021-06-28T13:44:34Z",
          "tree_id": "eab4be3d6b6de37731be665022cda06c0af373fe"
        },
        "date": 1624890176800,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1109.8241769754843,
            "unit": "iter/sec",
            "range": "stddev: 0.00012538368221041665",
            "extra": "mean: 901.043625419317 usec\nrounds: 598"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1603.3308331987196,
            "unit": "iter/sec",
            "range": "stddev: 0.0001067158820526661",
            "extra": "mean: 623.7015962606754 usec\nrounds: 1444"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 11076.654041763426,
            "unit": "iter/sec",
            "range": "stddev: 0.00001699689192430647",
            "extra": "mean: 90.27997048834415 usec\nrounds: 2067"
          }
        ]
      }
    ]
  }
}