window.BENCHMARK_DATA = {
  "lastUpdate": 1629812826754,
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
          "id": "b0c1f58857d9b755ff431709cc56820b2d1a65a7",
          "message": "Merge pull request #185 from TeoZosa/dependabot/github_actions/actions/setup-node-2.4.0",
          "timestamp": "2021-08-24T13:34:59Z",
          "tree_id": "59fe788aa6e6c8300de1eccb0996090693a43b9e"
        },
        "date": 1629812824483,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 280.0375713989593,
            "unit": "iter/sec",
            "range": "stddev: 0.00009786756041773554",
            "extra": "mean: 3.570949408696794 msec\nrounds: 115"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 799.2108087106666,
            "unit": "iter/sec",
            "range": "stddev: 0.00010257877839314651",
            "extra": "mean: 1.2512343290417434 msec\nrounds: 699"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1536.6307441549034,
            "unit": "iter/sec",
            "range": "stddev: 0.0003526066905583219",
            "extra": "mean: 650.7744321814721 usec\nrounds: 752"
          }
        ]
      }
    ]
  }
}