window.BENCHMARK_DATA = {
  "lastUpdate": 1613427174427,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action",
            "username": "actions-user"
          },
          "distinct": true,
          "id": "d428a809ad07f80296e70500038ae9d49a18096a",
          "message": "Merge pull request #63 from TeoZosa/dependabot/pip/structlog-sentry-logger-0.7.3\n\n⬆️ Bump structlog-sentry-logger from 0.6.1 to 0.7.3\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@c99f501",
          "timestamp": "2021-02-15T22:08:29Z",
          "tree_id": "0d70e6c8eba6de9fc0dc065cf5fd5b31e31fc674",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/d428a809ad07f80296e70500038ae9d49a18096a"
        },
        "date": 1613427173513,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1076.0705006736218,
            "unit": "iter/sec",
            "range": "stddev: 0.000049744003996121634",
            "extra": "mean: 929.3071405395822 usec\nrounds: 555"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1529.7332962949454,
            "unit": "iter/sec",
            "range": "stddev: 0.000018860464767122065",
            "extra": "mean: 653.7087232277852 usec\nrounds: 1326"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 12169.074854878021,
            "unit": "iter/sec",
            "range": "stddev: 0.000005093871717729935",
            "extra": "mean: 82.17551555278223 usec\nrounds: 1736"
          }
        ]
      }
    ]
  }
}