window.BENCHMARK_DATA = {
  "lastUpdate": 1625146370475,
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
          "id": "ad6a0b39aa7c7ee2e80ce1ad2f8e7e2002a61102",
          "message": "Merge pull request #236 from TeoZosa/dependabot/pip/dot-github/workflows/cruft-2.9.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@5e25fa4",
          "timestamp": "2021-07-01T13:20:18Z",
          "tree_id": "80ca54ff6e786e7bffa5e84292ebfedcba4030a8"
        },
        "date": 1625146368193,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1056.226793932297,
            "unit": "iter/sec",
            "range": "stddev: 0.00026403768591206045",
            "extra": "mean: 946.7663628159191 usec\nrounds: 554"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1464.0654464196343,
            "unit": "iter/sec",
            "range": "stddev: 0.00011920305900308015",
            "extra": "mean: 683.0295752457621 usec\nrounds: 1422"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 9299.005867446389,
            "unit": "iter/sec",
            "range": "stddev: 0.00009587293421778453",
            "extra": "mean: 107.5383771399438 usec\nrounds: 1811"
          }
        ]
      }
    ]
  }
}