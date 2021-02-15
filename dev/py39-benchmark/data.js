window.BENCHMARK_DATA = {
  "lastUpdate": 1613398691933,
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
          "id": "d480f865111ac9b525935525c3e4a5ed12a89989",
          "message": "Merge pull request #72 from TeoZosa/dependabot/pip/myst-parser-0.13.5\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@5e0e385",
          "timestamp": "2021-02-15T14:13:36Z",
          "tree_id": "a24b82dba57e6052dcb41f85fe9c0eecbc96a6a9",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/d480f865111ac9b525935525c3e4a5ed12a89989"
        },
        "date": 1613398690438,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1078.8686411538863,
            "unit": "iter/sec",
            "range": "stddev: 0.000019798825727215755",
            "extra": "mean: 926.8969009336173 usec\nrounds: 535"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1589.7798489846325,
            "unit": "iter/sec",
            "range": "stddev: 0.000019366533505807146",
            "extra": "mean: 629.0179112778944 usec\nrounds: 1330"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13125.101328006464,
            "unit": "iter/sec",
            "range": "stddev: 0.0000055106292569742205",
            "extra": "mean: 76.18988798708858 usec\nrounds: 1848"
          }
        ]
      }
    ]
  }
}