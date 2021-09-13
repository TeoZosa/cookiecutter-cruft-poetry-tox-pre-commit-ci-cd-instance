window.BENCHMARK_DATA = {
  "lastUpdate": 1631547858896,
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
          "id": "08f1b20aefbe1be7078c0ef636b707c659de2e67",
          "message": "Merge pull request #328 from TeoZosa/dependabot/pip/sphinx-4.2.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@dba7f1e",
          "timestamp": "2021-09-13T14:47:07Z",
          "tree_id": "ef37e23c1dc1c4498f5cb03e0d81d8eb4e700bbd"
        },
        "date": 1631547856561,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 347.54321441100876,
            "unit": "iter/sec",
            "range": "stddev: 0.0001668992037681807",
            "extra": "mean: 2.877340021426481 msec\nrounds: 140"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1011.143197738171,
            "unit": "iter/sec",
            "range": "stddev: 0.0000737969906631701",
            "extra": "mean: 988.9796047057456 usec\nrounds: 850"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2177.2677620513186,
            "unit": "iter/sec",
            "range": "stddev: 0.0000407748784406012",
            "extra": "mean: 459.29123529475646 usec\nrounds: 816"
          }
        ]
      }
    ]
  }
}