window.BENCHMARK_DATA = {
  "lastUpdate": 1612275333405,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action",
            "username": "actions-user"
          },
          "distinct": true,
          "id": "e06321b7db5e0a5cf91a4a557c5492a83615983a",
          "message": "Merge pull request #58 from TeoZosa/dependabot/pip/dot-github/workflows/cruft-2.6.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@7f20b60",
          "timestamp": "2021-02-02T14:11:22Z",
          "tree_id": "d057d8e98bd3c7fa5f6ef999b9cad5904b18c4c1",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/e06321b7db5e0a5cf91a4a557c5492a83615983a"
        },
        "date": 1612275332014,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1178.2532753492878,
            "unit": "iter/sec",
            "range": "stddev: 0.00018912245847721446",
            "extra": "mean: 848.7139572801566 usec\nrounds: 515"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1495.9796991272915,
            "unit": "iter/sec",
            "range": "stddev: 0.0001792075008436609",
            "extra": "mean: 668.4582689079065 usec\nrounds: 1309"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 10395.355177217281,
            "unit": "iter/sec",
            "range": "stddev: 0.00005023291321995679",
            "extra": "mean: 96.19680933958128 usec\nrounds: 2056"
          }
        ]
      }
    ]
  }
}