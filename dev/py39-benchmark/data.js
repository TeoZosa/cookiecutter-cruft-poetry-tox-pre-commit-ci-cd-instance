window.BENCHMARK_DATA = {
  "lastUpdate": 1613436475859,
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
          "id": "aa436b11295d20db32fded10544e22854e2df916",
          "message": "Merge pull request #71 from TeoZosa/dependabot/pip/pygments-2.8.0\n\n⬆️ Bump pygments from 2.7.4 to 2.8.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@f87ce32",
          "timestamp": "2021-02-16T00:43:48Z",
          "tree_id": "048bee42d958d7aeca4627563994b74615834502",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/aa436b11295d20db32fded10544e22854e2df916"
        },
        "date": 1613436475020,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1148.1050965507848,
            "unit": "iter/sec",
            "range": "stddev: 0.00005847871684348837",
            "extra": "mean: 871.0004014478011 usec\nrounds: 553"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1701.2323369833325,
            "unit": "iter/sec",
            "range": "stddev: 0.00006735015645122399",
            "extra": "mean: 587.8091888220423 usec\nrounds: 1324"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13952.263967122939,
            "unit": "iter/sec",
            "range": "stddev: 0.000006380369970733706",
            "extra": "mean: 71.67295589851197 usec\nrounds: 1814"
          }
        ]
      }
    ]
  }
}