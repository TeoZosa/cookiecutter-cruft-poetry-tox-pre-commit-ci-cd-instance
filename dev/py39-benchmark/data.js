window.BENCHMARK_DATA = {
  "lastUpdate": 1631547942067,
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
          "id": "1d5bba6ed748df0399217eccc0b8d558ffbf94c3",
          "message": "Merge pull request #217 from TeoZosa/dependabot/pip/structlog-sentry-logger-0.9.1",
          "timestamp": "2021-09-13T13:51:15Z",
          "tree_id": "a342a41308dd9589bbb6946313cf0ebb502a785b"
        },
        "date": 1631547939592,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 304.40207998784496,
            "unit": "iter/sec",
            "range": "stddev: 0.00034607238209474343",
            "extra": "mean: 3.285128669422794 msec\nrounds: 121"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 898.2430768554528,
            "unit": "iter/sec",
            "range": "stddev: 0.00002735357305188388",
            "extra": "mean: 1.113284394576995 msec\nrounds: 811"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1944.4233989035843,
            "unit": "iter/sec",
            "range": "stddev: 0.00001363509778708364",
            "extra": "mean: 514.2912806767688 usec\nrounds: 766"
          }
        ]
      }
    ]
  }
}