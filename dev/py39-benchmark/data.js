window.BENCHMARK_DATA = {
  "lastUpdate": 1624973102920,
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
        "date": 1624973099802,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1091.4215696059707,
            "unit": "iter/sec",
            "range": "stddev: 0.000026772223598749813",
            "extra": "mean: 916.2362444064797 usec\nrounds: 581"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1602.6558359434162,
            "unit": "iter/sec",
            "range": "stddev: 0.000024985927801121357",
            "extra": "mean: 623.9642832681803 usec\nrounds: 1285"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 12697.876320886047,
            "unit": "iter/sec",
            "range": "stddev: 0.000005572537635440601",
            "extra": "mean: 78.7533265192664 usec\nrounds: 1712"
          }
        ]
      }
    ]
  }
}