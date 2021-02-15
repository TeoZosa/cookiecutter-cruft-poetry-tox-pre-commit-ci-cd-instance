window.BENCHMARK_DATA = {
  "lastUpdate": 1613427185450,
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
        "date": 1613427183499,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1063.1751383239198,
            "unit": "iter/sec",
            "range": "stddev: 0.00002227419590037311",
            "extra": "mean: 940.5788039555605 usec\nrounds: 556"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1567.21468064984,
            "unit": "iter/sec",
            "range": "stddev: 0.000018795217335977407",
            "extra": "mean: 638.0746762692099 usec\nrounds: 1319"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 11956.927884819508,
            "unit": "iter/sec",
            "range": "stddev: 0.0000053326677336086384",
            "extra": "mean: 83.63352272698725 usec\nrounds: 1716"
          }
        ]
      }
    ]
  }
}