window.BENCHMARK_DATA = {
  "lastUpdate": 1613427151017,
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
        "date": 1613427150135,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1123.9461577042011,
            "unit": "iter/sec",
            "range": "stddev: 0.00004182575643864901",
            "extra": "mean: 889.7223351362521 usec\nrounds: 555"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1649.1598161855766,
            "unit": "iter/sec",
            "range": "stddev: 0.000032582002344806025",
            "extra": "mean: 606.3693707459774 usec\nrounds: 1381"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13732.243058620084,
            "unit": "iter/sec",
            "range": "stddev: 0.0000056103195498282584",
            "extra": "mean: 72.8213151872719 usec\nrounds: 1837"
          }
        ]
      }
    ]
  }
}