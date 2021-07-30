window.BENCHMARK_DATA = {
  "lastUpdate": 1627652392417,
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
        "date": 1627652389865,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 988.4462867978832,
            "unit": "iter/sec",
            "range": "stddev: 0.00017522170313314688",
            "extra": "mean: 1.0116887618036843 msec\nrounds: 466"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1407.871839294904,
            "unit": "iter/sec",
            "range": "stddev: 0.00013296629860503785",
            "extra": "mean: 710.2919257912168 usec\nrounds: 1105"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8754.176898598958,
            "unit": "iter/sec",
            "range": "stddev: 0.00003022191673398384",
            "extra": "mean: 114.23118490557835 usec\nrounds: 2120"
          }
        ]
      }
    ]
  }
}