window.BENCHMARK_DATA = {
  "lastUpdate": 1625579036036,
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
          "id": "1048a56f2cf9735c0931bb9b6f1b44103e095d6c",
          "message": "Merge pull request #241 from TeoZosa/dependabot/pip/sphinx-4.0.3\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@42db373",
          "timestamp": "2021-07-06T13:25:54Z",
          "tree_id": "f493e1d582799d578ffbfe052ac390e9c53cdff1"
        },
        "date": 1625579033815,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 966.7252936670382,
            "unit": "iter/sec",
            "range": "stddev: 0.00013029196843959416",
            "extra": "mean: 1.0344200224727154 msec\nrounds: 445"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1325.7408761804961,
            "unit": "iter/sec",
            "range": "stddev: 0.00013950310454246108",
            "extra": "mean: 754.2952155786533 usec\nrounds: 1271"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8584.379740592276,
            "unit": "iter/sec",
            "range": "stddev: 0.00008193420831305202",
            "extra": "mean: 116.4906528157625 usec\nrounds: 1829"
          }
        ]
      }
    ]
  }
}