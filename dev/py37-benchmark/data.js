window.BENCHMARK_DATA = {
  "lastUpdate": 1613399195877,
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
          "id": "8178f1fafaf7a6405ff988f7fe911fcd9976ab48",
          "message": "Merge pull request #66 from TeoZosa/dependabot/pip/pre-commit-2.10.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@1f26a28",
          "timestamp": "2021-02-15T14:21:24Z",
          "tree_id": "01df230fbdbf2317b3d8566a818581094b361e37",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/8178f1fafaf7a6405ff988f7fe911fcd9976ab48"
        },
        "date": 1613399194850,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 926.5918153900717,
            "unit": "iter/sec",
            "range": "stddev: 0.0002485220557651393",
            "extra": "mean: 1.0792238646949683 msec\nrounds: 473"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1286.1887924689966,
            "unit": "iter/sec",
            "range": "stddev: 0.00008698050827518242",
            "extra": "mean: 777.4908363805423 usec\nrounds: 1094"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8086.195506418124,
            "unit": "iter/sec",
            "range": "stddev: 0.000015449077450238806",
            "extra": "mean: 123.66755159534372 usec\nrounds: 1599"
          }
        ]
      }
    ]
  }
}