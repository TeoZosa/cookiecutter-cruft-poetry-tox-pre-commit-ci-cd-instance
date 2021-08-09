window.BENCHMARK_DATA = {
  "lastUpdate": 1628529316633,
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
        "date": 1628529314194,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 261.9466569698365,
            "unit": "iter/sec",
            "range": "stddev: 0.0005466734131195763",
            "extra": "mean: 3.8175711481408645 msec\nrounds: 108"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 788.287323070717,
            "unit": "iter/sec",
            "range": "stddev: 0.0005010005345453921",
            "extra": "mean: 1.2685729818723603 msec\nrounds: 662"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1571.2627258577688,
            "unit": "iter/sec",
            "range": "stddev: 0.0002419171960897837",
            "extra": "mean: 636.4308040554386 usec\nrounds: 740"
          }
        ]
      }
    ]
  }
}