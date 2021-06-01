window.BENCHMARK_DATA = {
  "lastUpdate": 1622554403563,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action",
            "username": "actions-user"
          },
          "distinct": true,
          "id": "ee12de4d65c068916904ea70a0ac6287d4ebcc86",
          "message": "Merge pull request #194 from TeoZosa/dependabot/pip/pylint-2.8.3\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@bbee650",
          "timestamp": "2021-06-01T13:21:42Z",
          "tree_id": "090ebc73577a21db5505a992d1c3087b671d8c6a",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/ee12de4d65c068916904ea70a0ac6287d4ebcc86"
        },
        "date": 1622554401521,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1038.1723931600532,
            "unit": "iter/sec",
            "range": "stddev: 0.0001312422505297792",
            "extra": "mean: 963.2311614029134 usec\nrounds: 570"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1359.3034679819552,
            "unit": "iter/sec",
            "range": "stddev: 0.00017416277272317858",
            "extra": "mean: 735.670895833597 usec\nrounds: 1296"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 7905.602214737126,
            "unit": "iter/sec",
            "range": "stddev: 0.00006695419980036985",
            "extra": "mean: 126.4925773947825 usec\nrounds: 1796"
          }
        ]
      }
    ]
  }
}