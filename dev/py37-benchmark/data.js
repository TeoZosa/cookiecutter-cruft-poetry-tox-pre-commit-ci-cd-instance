window.BENCHMARK_DATA = {
  "lastUpdate": 1629899127043,
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
          "id": "c91b854bab2e9ee946aa4e87959664855f794686",
          "message": "Merge pull request #186 from TeoZosa/dependabot/github_actions/codecov/codecov-action-2.0.3",
          "timestamp": "2021-08-25T13:27:22Z",
          "tree_id": "4c08a94b0d6d5228fc8e4a990af28f13934b3dfc"
        },
        "date": 1629899125359,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 397.70321725725626,
            "unit": "iter/sec",
            "range": "stddev: 0.000026306634957061893",
            "extra": "mean: 2.514437793328549 msec\nrounds: 150"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1148.25759441368,
            "unit": "iter/sec",
            "range": "stddev: 0.000019147096515319745",
            "extra": "mean: 870.8847255746801 usec\nrounds: 911"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2401.2181811140404,
            "unit": "iter/sec",
            "range": "stddev: 0.000012122296887607472",
            "extra": "mean: 416.4552841824861 usec\nrounds: 841"
          }
        ]
      }
    ]
  }
}