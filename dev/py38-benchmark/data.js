window.BENCHMARK_DATA = {
  "lastUpdate": 1624973068609,
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
          "id": "a3927ef559250f66935fe0094ee5e8c501fa8384",
          "message": "Merge pull request #86 from TeoZosa/dependabot/github_actions/crazy-max/ghaction-github-labeler-3.1.1",
          "timestamp": "2021-06-29T13:18:08Z",
          "tree_id": "c23b9778192c91216c4818e3a8192e0363959d98"
        },
        "date": 1624973066276,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1228.1700668216806,
            "unit": "iter/sec",
            "range": "stddev: 0.00008679929908881632",
            "extra": "mean: 814.2194855699827 usec\nrounds: 589"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1823.1490239909065,
            "unit": "iter/sec",
            "range": "stddev: 0.00006904171631251292",
            "extra": "mean: 548.5015140512111 usec\nrounds: 1459"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13255.56042220893,
            "unit": "iter/sec",
            "range": "stddev: 0.000010988674452336218",
            "extra": "mean: 75.44003936073177 usec\nrounds: 1753"
          }
        ]
      }
    ]
  }
}