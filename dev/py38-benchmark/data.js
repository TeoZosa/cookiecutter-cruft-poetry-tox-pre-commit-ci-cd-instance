window.BENCHMARK_DATA = {
  "lastUpdate": 1628525675285,
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
          "id": "80a3399a43d0350086869732a631d55edd86ba5a",
          "message": "Merge pull request #277 from TeoZosa/dependabot/pip/types-emoji-1.2.4\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@cd1c029",
          "timestamp": "2021-08-09T14:47:42Z",
          "tree_id": "5057d2690c13afd0460c968fa589b0c3e1efbcfd"
        },
        "date": 1628525672974,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 308.767980120092,
            "unit": "iter/sec",
            "range": "stddev: 0.00006937999403079717",
            "extra": "mean: 3.238677791690255 msec\nrounds: 120"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 904.5310968538544,
            "unit": "iter/sec",
            "range": "stddev: 0.000020527339646918685",
            "extra": "mean: 1.1055451863160992 msec\nrounds: 805"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1860.9662452966004,
            "unit": "iter/sec",
            "range": "stddev: 0.0000132678138940042",
            "extra": "mean: 537.3552596815748 usec\nrounds: 728"
          }
        ]
      }
    ]
  }
}