window.BENCHMARK_DATA = {
  "lastUpdate": 1627395126027,
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
          "id": "25ee73a90bdc3651ce0896914295faadc35b40c8",
          "message": "Merge pull request #134 from TeoZosa/dependabot/pip/sphinx-4.1.2",
          "timestamp": "2021-07-27T13:50:55Z",
          "tree_id": "efd166ff608b2174724d9c8a06c1e2361e54e3f0"
        },
        "date": 1627395122055,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1262.350119130485,
            "unit": "iter/sec",
            "range": "stddev: 0.000015433502104149138",
            "extra": "mean: 792.1732527650938 usec\nrounds: 633"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1845.380085142867,
            "unit": "iter/sec",
            "range": "stddev: 0.000016029173615461405",
            "extra": "mean: 541.8937854867884 usec\nrounds: 1571"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 14537.608700681865,
            "unit": "iter/sec",
            "range": "stddev: 0.00003666111606222367",
            "extra": "mean: 68.78710388958925 usec\nrounds: 2031"
          }
        ]
      }
    ]
  }
}