window.BENCHMARK_DATA = {
  "lastUpdate": 1631547917705,
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
        "date": 1631547914538,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 297.37915218114864,
            "unit": "iter/sec",
            "range": "stddev: 0.00021536963345335173",
            "extra": "mean: 3.3627105083373485 msec\nrounds: 120"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 828.2338818841154,
            "unit": "iter/sec",
            "range": "stddev: 0.00020104011631169472",
            "extra": "mean: 1.2073884223682578 msec\nrounds: 760"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1711.7460003473268,
            "unit": "iter/sec",
            "range": "stddev: 0.00008085766188608204",
            "extra": "mean: 584.1988237723891 usec\nrounds: 715"
          }
        ]
      }
    ]
  }
}