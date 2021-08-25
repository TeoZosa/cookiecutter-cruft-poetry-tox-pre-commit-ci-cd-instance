window.BENCHMARK_DATA = {
  "lastUpdate": 1629899195913,
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
        "date": 1629899193497,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 311.40004447959126,
            "unit": "iter/sec",
            "range": "stddev: 0.00036177873939889405",
            "extra": "mean: 3.2113033306439966 msec\nrounds: 124"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 882.767277490825,
            "unit": "iter/sec",
            "range": "stddev: 0.00017569038493208292",
            "extra": "mean: 1.1328013911462567 msec\nrounds: 813"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1739.0406447515606,
            "unit": "iter/sec",
            "range": "stddev: 0.0001412125869897641",
            "extra": "mean: 575.0296883618037 usec\nrounds: 799"
          }
        ]
      }
    ]
  }
}