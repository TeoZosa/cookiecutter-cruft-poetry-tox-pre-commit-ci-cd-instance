window.BENCHMARK_DATA = {
  "lastUpdate": 1628531870598,
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
          "id": "47cb419b3856502fda369af9a19262954e31177c",
          "message": "Merge pull request #144 from TeoZosa/dependabot/github_actions/crazy-max/ghaction-github-labeler-3.1.1",
          "timestamp": "2021-08-09T17:49:24Z",
          "tree_id": "1afc56692ca4b292e77faf963a8f8785ddad1cd8"
        },
        "date": 1628531867774,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 312.0935382794205,
            "unit": "iter/sec",
            "range": "stddev: 0.00005148240368767147",
            "extra": "mean: 3.20416758870762 msec\nrounds: 124"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 913.5224816443791,
            "unit": "iter/sec",
            "range": "stddev: 0.00002030536412720809",
            "extra": "mean: 1.0946638096962404 msec\nrounds: 825"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1876.0353668701428,
            "unit": "iter/sec",
            "range": "stddev: 0.000015298214586347452",
            "extra": "mean: 533.0389915134361 usec\nrounds: 707"
          }
        ]
      }
    ]
  }
}