window.BENCHMARK_DATA = {
  "lastUpdate": 1625059786467,
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
          "id": "b16a271432b75e440c02b18891e2af45ba74bc16",
          "message": "Merge pull request #233 from TeoZosa/dependabot/pip/pylint-2.9.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@2cbd8b3",
          "timestamp": "2021-06-30T13:23:52Z",
          "tree_id": "155f62bf3f2570a886a7f27dec53d49fe159c9a5"
        },
        "date": 1625059784172,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1339.4237084884,
            "unit": "iter/sec",
            "range": "stddev: 0.00008780249328219584",
            "extra": "mean: 746.5897412914582 usec\nrounds: 603"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1931.4003309632785,
            "unit": "iter/sec",
            "range": "stddev: 0.00006945041906102313",
            "extra": "mean: 517.7590497259849 usec\nrounds: 1830"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 15463.244633200491,
            "unit": "iter/sec",
            "range": "stddev: 0.000010480902395755528",
            "extra": "mean: 64.66948067632207 usec\nrounds: 2070"
          }
        ]
      }
    ]
  }
}