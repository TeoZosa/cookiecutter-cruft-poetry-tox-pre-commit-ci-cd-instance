window.BENCHMARK_DATA = {
  "lastUpdate": 1631021561068,
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
          "id": "2bfcba14314da44dcd39ea7bf6897d7419f02299",
          "message": "Merge pull request #208 from TeoZosa/dependabot/github_actions/codecov/codecov-action-2.0.3",
          "timestamp": "2021-09-07T13:23:08Z",
          "tree_id": "bcf6f1702db04a2c494a1bb54323418b3e5c69f0"
        },
        "date": 1631021558585,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 281.94800981391984,
            "unit": "iter/sec",
            "range": "stddev: 0.00034301450215957726",
            "extra": "mean: 3.546753178573527 msec\nrounds: 112"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 805.337924271163,
            "unit": "iter/sec",
            "range": "stddev: 0.00010804829902588331",
            "extra": "mean: 1.2417147757011537 msec\nrounds: 749"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1686.5610975151149,
            "unit": "iter/sec",
            "range": "stddev: 0.00004618681972447164",
            "extra": "mean: 592.9224867532781 usec\nrounds: 717"
          }
        ]
      }
    ]
  }
}