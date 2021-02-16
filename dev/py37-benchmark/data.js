window.BENCHMARK_DATA = {
  "lastUpdate": 1613436533063,
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
        "date": 1613436532189,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 940.1374335837205,
            "unit": "iter/sec",
            "range": "stddev: 0.00011329730030246021",
            "extra": "mean: 1.063674271737153 msec\nrounds: 460"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1255.6340401811797,
            "unit": "iter/sec",
            "range": "stddev: 0.00022329081117683971",
            "extra": "mean: 796.4103934739668 usec\nrounds: 1042"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8331.55932576059,
            "unit": "iter/sec",
            "range": "stddev: 0.00002530247355872644",
            "extra": "mean: 120.02555114839917 usec\nrounds: 1740"
          }
        ]
      }
    ]
  }
}