window.BENCHMARK_DATA = {
  "lastUpdate": 1630420137744,
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
      }
    ]
  }
}