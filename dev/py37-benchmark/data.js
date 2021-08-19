window.BENCHMARK_DATA = {
  "lastUpdate": 1629383605393,
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
        "date": 1629383602908,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 273.98144471331335,
            "unit": "iter/sec",
            "range": "stddev: 0.0011287146898985164",
            "extra": "mean: 3.6498822066084533 msec\nrounds: 121"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 827.8841816133296,
            "unit": "iter/sec",
            "range": "stddev: 0.00029026175211271373",
            "extra": "mean: 1.207898426143693 msec\nrounds: 765"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1759.0467474796899,
            "unit": "iter/sec",
            "range": "stddev: 0.00014301870115715398",
            "extra": "mean: 568.4897240126053 usec\nrounds: 837"
          }
        ]
      }
    ]
  }
}