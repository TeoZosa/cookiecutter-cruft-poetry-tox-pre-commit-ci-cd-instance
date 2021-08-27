window.BENCHMARK_DATA = {
  "lastUpdate": 1630077273326,
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
        "date": 1630077270818,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 278.5174174905976,
            "unit": "iter/sec",
            "range": "stddev: 0.0001740628099820872",
            "extra": "mean: 3.590439725493141 msec\nrounds: 102"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 786.6966662427842,
            "unit": "iter/sec",
            "range": "stddev: 0.00035685292253514794",
            "extra": "mean: 1.2711379657625088 msec\nrounds: 701"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1587.124820226291,
            "unit": "iter/sec",
            "range": "stddev: 0.00015884721497389244",
            "extra": "mean: 630.0701666661737 usec\nrounds: 654"
          }
        ]
      }
    ]
  }
}