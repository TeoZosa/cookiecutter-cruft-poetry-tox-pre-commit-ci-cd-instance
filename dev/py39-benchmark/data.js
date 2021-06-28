window.BENCHMARK_DATA = {
  "lastUpdate": 1624889995461,
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
        "date": 1624889993233,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 943.1568520526919,
            "unit": "iter/sec",
            "range": "stddev: 0.00028503917659212954",
            "extra": "mean: 1.0602690292962347 msec\nrounds: 512"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1343.0446968436524,
            "unit": "iter/sec",
            "range": "stddev: 0.0001889355064526456",
            "extra": "mean: 744.5768576058141 usec\nrounds: 1236"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8538.377011460916,
            "unit": "iter/sec",
            "range": "stddev: 0.00006553568554626269",
            "extra": "mean: 117.1182765363625 usec\nrounds: 1790"
          }
        ]
      }
    ]
  }
}