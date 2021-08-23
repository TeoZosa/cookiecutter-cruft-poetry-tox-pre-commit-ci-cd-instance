window.BENCHMARK_DATA = {
  "lastUpdate": 1629731866927,
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
          "id": "24eb011bc66c67e260b9d2fc46366f83684f1b5d",
          "message": "Merge pull request #182 from TeoZosa/dependabot/github_actions/actions/setup-node-2.4.0",
          "timestamp": "2021-08-23T13:45:08Z",
          "tree_id": "7a0e76f2d369e2ccf05c02f8e9ad0d31d53fd295"
        },
        "date": 1629731864782,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 332.5374394662882,
            "unit": "iter/sec",
            "range": "stddev: 0.0005891734595368727",
            "extra": "mean: 3.0071801888081158 msec\nrounds: 143"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 950.5442930747005,
            "unit": "iter/sec",
            "range": "stddev: 0.00016525411835951475",
            "extra": "mean: 1.0520288294670903 msec\nrounds: 862"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1989.6300081478632,
            "unit": "iter/sec",
            "range": "stddev: 0.00021110029747360275",
            "extra": "mean: 502.6060101148631 usec\nrounds: 791"
          }
        ]
      }
    ]
  }
}