window.BENCHMARK_DATA = {
  "lastUpdate": 1622554436519,
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
        "date": 1622554434354,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1024.5313423260438,
            "unit": "iter/sec",
            "range": "stddev: 0.00002146766554557873",
            "extra": "mean: 976.0560352694051 usec\nrounds: 482"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1547.9740095326563,
            "unit": "iter/sec",
            "range": "stddev: 0.00002238412387640473",
            "extra": "mean: 646.0056782877813 usec\nrounds: 1262"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 12315.4606053616,
            "unit": "iter/sec",
            "range": "stddev: 0.000007453673715144761",
            "extra": "mean: 81.19874944544459 usec\nrounds: 1353"
          }
        ]
      }
    ]
  }
}