window.BENCHMARK_DATA = {
  "lastUpdate": 1629383681747,
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
          "id": "009cffcd74815d33cd5c09fde981824535493263",
          "message": "Merge pull request #172 from TeoZosa/dependabot/github_actions/crazy-max/ghaction-github-labeler-3.1.1",
          "timestamp": "2021-08-19T13:25:03Z",
          "tree_id": "ab0e483aff5580b13ea4a2c0e1f50a97d0a0e9e9"
        },
        "date": 1629383679264,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 294.9792460214662,
            "unit": "iter/sec",
            "range": "stddev: 0.0004230623789468725",
            "extra": "mean: 3.3900690082014378 msec\nrounds: 122"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 889.6522743239409,
            "unit": "iter/sec",
            "range": "stddev: 0.0001783543202803532",
            "extra": "mean: 1.1240346693430463 msec\nrounds: 747"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1751.263684965866,
            "unit": "iter/sec",
            "range": "stddev: 0.00013339642798583024",
            "extra": "mean: 571.0162373517675 usec\nrounds: 830"
          }
        ]
      }
    ]
  }
}