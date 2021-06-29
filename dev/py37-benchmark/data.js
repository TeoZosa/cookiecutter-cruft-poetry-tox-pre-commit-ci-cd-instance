window.BENCHMARK_DATA = {
  "lastUpdate": 1624973148087,
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
        "date": 1624973145753,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 878.6168357977931,
            "unit": "iter/sec",
            "range": "stddev: 0.000329621284778838",
            "extra": "mean: 1.1381525589502162 msec\nrounds: 458"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1184.3337505653772,
            "unit": "iter/sec",
            "range": "stddev: 0.00023548015354618997",
            "extra": "mean: 844.3565840478835 usec\nrounds: 1166"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 7435.791702817906,
            "unit": "iter/sec",
            "range": "stddev: 0.00014387223101137132",
            "extra": "mean: 134.4846708953715 usec\nrounds: 1340"
          }
        ]
      }
    ]
  }
}