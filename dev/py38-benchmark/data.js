window.BENCHMARK_DATA = {
  "lastUpdate": 1624889953141,
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
          "id": "5b2506eabaa17cf0411ce67385507ddac676322b",
          "message": "Merge pull request #80 from TeoZosa/dependabot/github_actions/crazy-max/ghaction-github-labeler-3.1.1",
          "timestamp": "2021-06-28T13:17:42Z",
          "tree_id": "73e2bf8c97d54b5f844cab83ce37e4eddd594e19"
        },
        "date": 1624889950894,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 984.696687292593,
            "unit": "iter/sec",
            "range": "stddev: 0.0004227858827682751",
            "extra": "mean: 1.0155411436891122 msec\nrounds: 515"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1475.1651282998057,
            "unit": "iter/sec",
            "range": "stddev: 0.00010986271957708382",
            "extra": "mean: 677.8902109437369 usec\nrounds: 1261"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 9199.851807873163,
            "unit": "iter/sec",
            "range": "stddev: 0.00003654466417224716",
            "extra": "mean: 108.69740305427611 usec\nrounds: 1506"
          }
        ]
      }
    ]
  }
}