window.BENCHMARK_DATA = {
  "lastUpdate": 1628308420637,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "79c4bef76961f7d10a0c059879219ab5fd29dbe6",
          "message": ":bookmark: Bump version number to `0.3.1`\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@8fe7192",
          "timestamp": "2021-08-07T03:47:06Z",
          "tree_id": "45d6915a6e7ae0068ac98902b8d933360011ab0a"
        },
        "date": 1628308418137,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1235.0594255987119,
            "unit": "iter/sec",
            "range": "stddev: 0.000014656914577259672",
            "extra": "mean: 809.6776392077137 usec\nrounds: 607"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1772.4435549408431,
            "unit": "iter/sec",
            "range": "stddev: 0.000016114877039673974",
            "extra": "mean: 564.192860874137 usec\nrounds: 1531"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13425.221155566667,
            "unit": "iter/sec",
            "range": "stddev: 0.0000051762465975921015",
            "extra": "mean: 74.4866686673059 usec\nrounds: 1832"
          }
        ]
      }
    ]
  }
}