window.BENCHMARK_DATA = {
  "lastUpdate": 1630077238931,
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
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "bb8a1302597dc6e7c0197aa572030415607bd7a9",
          "message": "Merge pull request #304 from TeoZosa/dependabot/pip/importlib-metadata-4.7.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@ef2ec6f",
          "timestamp": "2021-08-27T14:14:11Z",
          "tree_id": "7a7b277feba47a81384faeb8dd09a2d4cce8b854"
        },
        "date": 1630077236392,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 288.77905805127966,
            "unit": "iter/sec",
            "range": "stddev: 0.0004539493592738034",
            "extra": "mean: 3.462854982449683 msec\nrounds: 114"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 823.527396130962,
            "unit": "iter/sec",
            "range": "stddev: 0.00016560478423190408",
            "extra": "mean: 1.2142886863243763 msec\nrounds: 797"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1592.6428731533529,
            "unit": "iter/sec",
            "range": "stddev: 0.0001139373270492839",
            "extra": "mean: 627.8871533955696 usec\nrounds: 339"
          }
        ]
      }
    ]
  }
}