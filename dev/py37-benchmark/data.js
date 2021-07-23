window.BENCHMARK_DATA = {
  "lastUpdate": 1627054250311,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "3cc88d002d93e6545639f076b75848a1873d7762",
          "message": "Merge pull request #116 from TeoZosa/dependabot/github_actions/codecov/codecov-action-2.0.1",
          "timestamp": "2021-07-23T15:23:47Z",
          "tree_id": "a446c34bf246118a5bbc7c6e80cbb935b09d42ec"
        },
        "date": 1627054248832,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1209.0080721736629,
            "unit": "iter/sec",
            "range": "stddev: 0.000027085696399984265",
            "extra": "mean: 827.1243368971975 usec\nrounds: 561"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1748.265269835175,
            "unit": "iter/sec",
            "range": "stddev: 0.000020389383911225416",
            "extra": "mean: 571.9955759884649 usec\nrounds: 1441"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13412.616067350442,
            "unit": "iter/sec",
            "range": "stddev: 0.000005739444542820905",
            "extra": "mean: 74.55667074779262 usec\nrounds: 1716"
          }
        ]
      }
    ]
  }
}