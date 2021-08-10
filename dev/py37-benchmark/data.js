window.BENCHMARK_DATA = {
  "lastUpdate": 1628602541384,
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
        "date": 1628602539223,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 352.73101009206624,
            "unit": "iter/sec",
            "range": "stddev: 0.000025694253540407468",
            "extra": "mean: 2.8350215075759575 msec\nrounds: 132"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1027.5250105931,
            "unit": "iter/sec",
            "range": "stddev: 0.00001541279760888665",
            "extra": "mean: 973.2123205670564 usec\nrounds: 914"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2154.614112179406,
            "unit": "iter/sec",
            "range": "stddev: 0.000010379403481737498",
            "extra": "mean: 464.1202312503623 usec\nrounds: 800"
          }
        ]
      }
    ]
  }
}