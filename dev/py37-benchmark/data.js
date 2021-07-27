window.BENCHMARK_DATA = {
  "lastUpdate": 1627394769603,
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
          "id": "26ebb8c1636c48162f5f2cfecb8e17f1b509f92d",
          "message": "Merge pull request #132 from TeoZosa/dependabot/github_actions/actions/setup-node-2.3.0",
          "timestamp": "2021-07-27T13:27:24Z",
          "tree_id": "9fefb4c9d42ff0297a71bae868f4b2234b47511c"
        },
        "date": 1627394766988,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1221.800480487129,
            "unit": "iter/sec",
            "range": "stddev: 0.000015601540504693864",
            "extra": "mean: 818.4642386139038 usec\nrounds: 549"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1758.087372497293,
            "unit": "iter/sec",
            "range": "stddev: 0.000019483397226335307",
            "extra": "mean: 568.7999445553947 usec\nrounds: 1497"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13507.041297498094,
            "unit": "iter/sec",
            "range": "stddev: 0.0000051772440269029",
            "extra": "mean: 74.03545883769748 usec\nrounds: 1737"
          }
        ]
      }
    ]
  }
}