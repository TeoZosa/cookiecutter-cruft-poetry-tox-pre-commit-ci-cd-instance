window.BENCHMARK_DATA = {
  "lastUpdate": 1627652401015,
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
        "date": 1627652399350,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 922.8408289480853,
            "unit": "iter/sec",
            "range": "stddev: 0.0005082199329762483",
            "extra": "mean: 1.0836104869133993 msec\nrounds: 382"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1351.4991999224085,
            "unit": "iter/sec",
            "range": "stddev: 0.00019623957954861707",
            "extra": "mean: 739.9190469793925 usec\nrounds: 1341"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 9267.343888142645,
            "unit": "iter/sec",
            "range": "stddev: 0.000042978869026353754",
            "extra": "mean: 107.90578315319422 usec\nrounds: 1674"
          }
        ]
      }
    ]
  }
}