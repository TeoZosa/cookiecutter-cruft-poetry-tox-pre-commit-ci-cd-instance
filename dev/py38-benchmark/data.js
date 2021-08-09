window.BENCHMARK_DATA = {
  "lastUpdate": 1628522804859,
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
          "id": "c685869ba45c6d7c3834f34a83f8a5ef083f1881",
          "message": "Merge pull request #152 from TeoZosa/dependabot/github_actions/actions/setup-node-2.4.0",
          "timestamp": "2021-08-09T13:27:45Z",
          "tree_id": "b8f6c6c69ab356957685b141a4f702a02b25ef79"
        },
        "date": 1628522802904,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 361.90554926686985,
            "unit": "iter/sec",
            "range": "stddev: 0.00006456975920654308",
            "extra": "mean: 2.763151883207511 msec\nrounds: 137"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1057.6484138125206,
            "unit": "iter/sec",
            "range": "stddev: 0.000021646404340155873",
            "extra": "mean: 945.493783132795 usec\nrounds: 830"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2196.410504322854,
            "unit": "iter/sec",
            "range": "stddev: 0.000012183805181121047",
            "extra": "mean: 455.28829789871025 usec\nrounds: 809"
          }
        ]
      }
    ]
  }
}