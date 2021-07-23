window.BENCHMARK_DATA = {
  "lastUpdate": 1627054267436,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "3cc88d002d93e6545639f076b75848a1873d7762",
          "message": "Merge pull request #116 from TeoZosa/dependabot/github_actions/codecov/codecov-action-2.0.1",
          "timestamp": "2021-07-23T15:23:47Z",
          "tree_id": "a446c34bf246118a5bbc7c6e80cbb935b09d42ec"
        },
        "date": 1627054265821,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1278.7428191800136,
            "unit": "iter/sec",
            "range": "stddev: 0.000015867695105984076",
            "extra": "mean: 782.0180766616106 usec\nrounds: 587"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1892.8677339895512,
            "unit": "iter/sec",
            "range": "stddev: 0.000015745785811544073",
            "extra": "mean: 528.298930793397 usec\nrounds: 1575"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13887.389143076907,
            "unit": "iter/sec",
            "range": "stddev: 0.000004501958933383914",
            "extra": "mean: 72.00777552190337 usec\nrounds: 1871"
          }
        ]
      }
    ]
  }
}