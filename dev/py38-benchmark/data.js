window.BENCHMARK_DATA = {
  "lastUpdate": 1631196279264,
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
          "id": "fca406d3b9737a25a84c76be037dc4045bfc1304",
          "message": "Merge pull request #212 from TeoZosa/dependabot/github_actions/crazy-max/ghaction-github-labeler-3.1.1",
          "timestamp": "2021-09-09T13:41:54Z",
          "tree_id": "503a1417311af3a32774eac1e90df99f5b786749"
        },
        "date": 1631196277100,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 366.10975212210155,
            "unit": "iter/sec",
            "range": "stddev: 0.000026748807301024714",
            "extra": "mean: 2.731421368056017 msec\nrounds: 144"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1067.8881309951191,
            "unit": "iter/sec",
            "range": "stddev: 0.0000329495867848347",
            "extra": "mean: 936.4276753110299 usec\nrounds: 964"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2200.4381381570383,
            "unit": "iter/sec",
            "range": "stddev: 0.000011971451779654952",
            "extra": "mean: 454.454948157526 usec\nrounds: 868"
          }
        ]
      }
    ]
  }
}