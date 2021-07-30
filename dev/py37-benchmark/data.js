window.BENCHMARK_DATA = {
  "lastUpdate": 1627652380765,
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
          "id": "b9a48d496120ce7cbf06090adc790191a7bec868",
          "message": "Merge pull request #140 from TeoZosa/dependabot/github_actions/crazy-max/ghaction-github-labeler-3.1.1",
          "timestamp": "2021-07-30T13:13:59Z",
          "tree_id": "f40bbe5692b42c901870495f053c33a0af411c1d"
        },
        "date": 1627652378238,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1130.3446392403848,
            "unit": "iter/sec",
            "range": "stddev: 0.00007510518110806712",
            "extra": "mean: 884.6859314270919 usec\nrounds: 525"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1645.2955623740224,
            "unit": "iter/sec",
            "range": "stddev: 0.000051447674188548674",
            "extra": "mean: 607.7935313683606 usec\nrounds: 1323"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 12362.332033905346,
            "unit": "iter/sec",
            "range": "stddev: 0.00000910145887662856",
            "extra": "mean: 80.8908867078935 usec\nrounds: 1783"
          }
        ]
      }
    ]
  }
}