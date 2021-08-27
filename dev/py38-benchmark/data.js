window.BENCHMARK_DATA = {
  "lastUpdate": 1630077138969,
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
        "date": 1630077136961,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 327.3073861490756,
            "unit": "iter/sec",
            "range": "stddev: 0.00016029523450343986",
            "extra": "mean: 3.0552320000030164 msec\nrounds: 128"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 998.9369907402532,
            "unit": "iter/sec",
            "range": "stddev: 0.00008121388222494827",
            "extra": "mean: 1.0010641404509 msec\nrounds: 890"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1943.9829093866754,
            "unit": "iter/sec",
            "range": "stddev: 0.000027624763109499993",
            "extra": "mean: 514.4078145807871 usec\nrounds: 631"
          }
        ]
      }
    ]
  }
}