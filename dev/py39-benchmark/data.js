window.BENCHMARK_DATA = {
  "lastUpdate": 1626789327733,
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
          "id": "afe8c417a22862caf210cfdf766efdde900a9035",
          "message": "Merge pull request #114 from TeoZosa/dependabot/github_actions/crazy-max/ghaction-github-labeler-3.1.1",
          "timestamp": "2021-07-20T13:13:09Z",
          "tree_id": "97f57118aed63f36bffa9fb879589e1855eeb45b"
        },
        "date": 1626789325938,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1032.0906630990528,
            "unit": "iter/sec",
            "range": "stddev: 0.00002223175765986625",
            "extra": "mean: 968.907127787888 usec\nrounds: 493"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1550.2916131561988,
            "unit": "iter/sec",
            "range": "stddev: 0.000021758536243349784",
            "extra": "mean: 645.0399341089937 usec\nrounds: 1290"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 12363.441969962012,
            "unit": "iter/sec",
            "range": "stddev: 0.0000066163450182663225",
            "extra": "mean: 80.88362467584524 usec\nrounds: 1548"
          }
        ]
      }
    ]
  }
}