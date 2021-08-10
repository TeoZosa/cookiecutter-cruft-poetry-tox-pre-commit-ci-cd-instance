window.BENCHMARK_DATA = {
  "lastUpdate": 1628602610499,
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
          "id": "f4033e0510900d196733a820adcd64507462c6e8",
          "message": "Merge pull request #156 from TeoZosa/dependabot/github_actions/crazy-max/ghaction-github-labeler-3.1.1",
          "timestamp": "2021-08-10T13:26:33Z",
          "tree_id": "8c474e329d7a9914b225f9e019cb0106157b1596"
        },
        "date": 1628602608160,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 321.00003154355056,
            "unit": "iter/sec",
            "range": "stddev: 0.0001687414104540359",
            "extra": "mean: 3.1152644913816103 msec\nrounds: 116"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 935.3996349901831,
            "unit": "iter/sec",
            "range": "stddev: 0.00005824435176377849",
            "extra": "mean: 1.069061781289336 msec\nrounds: 823"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1906.5663149039567,
            "unit": "iter/sec",
            "range": "stddev: 0.000024694966139896016",
            "extra": "mean: 524.503130147023 usec\nrounds: 753"
          }
        ]
      }
    ]
  }
}