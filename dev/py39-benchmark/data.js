window.BENCHMARK_DATA = {
  "lastUpdate": 1626270828444,
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
          "id": "e8361ae2428d19ac5f556a567364fd0013c158f3",
          "message": "Merge pull request #245 from TeoZosa/dependabot/pip/tox-3.24.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@8d1d5c1",
          "timestamp": "2021-07-14T13:28:00Z",
          "tree_id": "0136d7f92518784c44661cb5658a0ed3adac6248"
        },
        "date": 1626270825710,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 913.9434069266545,
            "unit": "iter/sec",
            "range": "stddev: 0.00030968685297458624",
            "extra": "mean: 1.0941596519227932 msec\nrounds: 520"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1295.1438722116504,
            "unit": "iter/sec",
            "range": "stddev: 0.00022887267954740874",
            "extra": "mean: 772.1149915895843 usec\nrounds: 1189"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 9234.356650254409,
            "unit": "iter/sec",
            "range": "stddev: 0.000036201240689411084",
            "extra": "mean: 108.29124733583359 usec\nrounds: 1783"
          }
        ]
      }
    ]
  }
}