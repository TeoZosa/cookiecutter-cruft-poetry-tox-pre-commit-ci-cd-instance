window.BENCHMARK_DATA = {
  "lastUpdate": 1630420223669,
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
          "id": "28c1ea217a9e711a3f0acc44acd06cb275bbd007",
          "message": "Merge pull request #312 from TeoZosa/dependabot/pip/pytest-6.2.5\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@2c4c6a3",
          "timestamp": "2021-08-31T13:59:14Z",
          "tree_id": "6f00cd90ee0895aec069a49b0d08e8d15e720fae"
        },
        "date": 1630420134973,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 292.0867231696655,
            "unit": "iter/sec",
            "range": "stddev: 0.00027249183015016896",
            "extra": "mean: 3.423640722687441 msec\nrounds: 119"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 837.9921492781151,
            "unit": "iter/sec",
            "range": "stddev: 0.0001368389823644319",
            "extra": "mean: 1.1933286020178662 msec\nrounds: 794"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1702.2523268021362,
            "unit": "iter/sec",
            "range": "stddev: 0.00008335755205291194",
            "extra": "mean: 587.4569734785485 usec\nrounds: 641"
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
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "85cb138fda3d140631d044d56c8f7487fb00ea8c",
          "message": "Merge pull request #204 from TeoZosa/dependabot/pip/hypothesis-6.17.4",
          "timestamp": "2021-08-31T13:35:43Z",
          "tree_id": "d34c133d1f90bf01ec0fc2afe5717c49021378ea"
        },
        "date": 1630420221144,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 285.7744707249081,
            "unit": "iter/sec",
            "range": "stddev: 0.0003707805475382918",
            "extra": "mean: 3.4992628888905153 msec\nrounds: 126"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 850.1568463925064,
            "unit": "iter/sec",
            "range": "stddev: 0.0002169032595153004",
            "extra": "mean: 1.1762535398536482 msec\nrounds: 665"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1633.8430679782734,
            "unit": "iter/sec",
            "range": "stddev: 0.00022691431401266926",
            "extra": "mean: 612.0538866914591 usec\nrounds: 759"
          }
        ]
      }
    ]
  }
}