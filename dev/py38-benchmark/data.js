window.BENCHMARK_DATA = {
  "lastUpdate": 1625146524556,
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
          "id": "ad6a0b39aa7c7ee2e80ce1ad2f8e7e2002a61102",
          "message": "Merge pull request #236 from TeoZosa/dependabot/pip/dot-github/workflows/cruft-2.9.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@5e25fa4",
          "timestamp": "2021-07-01T13:20:18Z",
          "tree_id": "80ca54ff6e786e7bffa5e84292ebfedcba4030a8"
        },
        "date": 1625146406862,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 975.9639443625671,
            "unit": "iter/sec",
            "range": "stddev: 0.0002619836693759992",
            "extra": "mean: 1.0246280160002545 msec\nrounds: 375"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1403.0903404984265,
            "unit": "iter/sec",
            "range": "stddev: 0.00010049026958980809",
            "extra": "mean: 712.7124826793158 usec\nrounds: 1328"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8784.768240649852,
            "unit": "iter/sec",
            "range": "stddev: 0.00003573798453774065",
            "extra": "mean: 113.83339578302015 usec\nrounds: 1660"
          }
        ]
      },
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
          "id": "4dbc063d6ff65977ec21245be9e16a2e67fa679f",
          "message": "Merge pull request #238 from TeoZosa/dependabot/pip/pylint-2.9.3\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@203fa51",
          "timestamp": "2021-07-01T13:29:17Z",
          "tree_id": "2ab5bb9b318e9f530ef588e9b3ebd57bd663ed60"
        },
        "date": 1625146522138,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1243.5544543356523,
            "unit": "iter/sec",
            "range": "stddev: 0.00007688973310519194",
            "extra": "mean: 804.1465305467729 usec\nrounds: 622"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1819.5493040456076,
            "unit": "iter/sec",
            "range": "stddev: 0.000064268992720319",
            "extra": "mean: 549.5866464165539 usec\nrounds: 1465"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13072.880335082973,
            "unit": "iter/sec",
            "range": "stddev: 0.000010834770784635555",
            "extra": "mean: 76.49423649326575 usec\nrounds: 1962"
          }
        ]
      }
    ]
  }
}