window.BENCHMARK_DATA = {
  "lastUpdate": 1628529032983,
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
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "43446c43135a02f6f4946a828b8f9626552e1c73",
          "message": "Merge pull request #155 from TeoZosa/dependabot/pip/structlog-sentry-logger-0.9.0",
          "timestamp": "2021-08-09T16:09:20Z",
          "tree_id": "f0013c7470280898e24c0b68930a489be2662c41"
        },
        "date": 1628529030573,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 247.65509506784818,
            "unit": "iter/sec",
            "range": "stddev: 0.00042465074667836627",
            "extra": "mean: 4.037873720005791 msec\nrounds: 100"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 709.1599828702674,
            "unit": "iter/sec",
            "range": "stddev: 0.00046354243650064417",
            "extra": "mean: 1.410119048106157 msec\nrounds: 686"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1437.689887919371,
            "unit": "iter/sec",
            "range": "stddev: 0.000191122838944446",
            "extra": "mean: 695.5602932195642 usec\nrounds: 590"
          }
        ]
      }
    ]
  }
}