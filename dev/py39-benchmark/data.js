window.BENCHMARK_DATA = {
  "lastUpdate": 1619808486932,
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
          "id": "4cdc7b8d70275c5d6765430631fbd8e8748805cb",
          "message": "Merge pull request #154 from TeoZosa/dependabot/pip/pylint-2.8.2\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@81ccf9d",
          "timestamp": "2021-04-30T18:43:59Z",
          "tree_id": "0e9bcca84c9ee66c7e801aec00022d8a13fa225e",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/4cdc7b8d70275c5d6765430631fbd8e8748805cb"
        },
        "date": 1619808482319,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1186.1959878211728,
            "unit": "iter/sec",
            "range": "stddev: 0.00008086607054676566",
            "extra": "mean: 843.0310085914376 usec\nrounds: 582"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1687.5620583880725,
            "unit": "iter/sec",
            "range": "stddev: 0.00005539323440789308",
            "extra": "mean: 592.5708005992865 usec\nrounds: 1334"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 14001.461685754248,
            "unit": "iter/sec",
            "range": "stddev: 0.000009935770457701182",
            "extra": "mean: 71.4211146267284 usec\nrounds: 1928"
          }
        ]
      }
    ]
  }
}