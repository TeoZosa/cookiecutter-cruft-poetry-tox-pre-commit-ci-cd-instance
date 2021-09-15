window.BENCHMARK_DATA = {
  "lastUpdate": 1631712858959,
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
          "id": "62ae851d1b31cce8f1b3057725520d295d3c942d",
          "message": "Merge pull request #332 from TeoZosa/dependabot/pip/hypothesis-6.21.3\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@a931845",
          "timestamp": "2021-09-15T13:26:13Z",
          "tree_id": "0ef18f96649e835121996ea91eecc83beec4a7de"
        },
        "date": 1631712856732,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 366.6068410015937,
            "unit": "iter/sec",
            "range": "stddev: 0.00002719126925587269",
            "extra": "mean: 2.727717784174281 msec\nrounds: 139"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1032.6196304491266,
            "unit": "iter/sec",
            "range": "stddev: 0.000028273082670074547",
            "extra": "mean: 968.4107976574695 usec\nrounds: 939"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2232.6224253293185,
            "unit": "iter/sec",
            "range": "stddev: 0.000011927603458090225",
            "extra": "mean: 447.90376942151204 usec\nrounds: 811"
          }
        ]
      }
    ]
  }
}