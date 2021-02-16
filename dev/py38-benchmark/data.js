window.BENCHMARK_DATA = {
  "lastUpdate": 1613436527582,
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
        "date": 1613436526647,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 884.1573458595541,
            "unit": "iter/sec",
            "range": "stddev: 0.0007028352271212943",
            "extra": "mean: 1.1310204056811028 msec\nrounds: 493"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1280.2215220885842,
            "unit": "iter/sec",
            "range": "stddev: 0.00030944657801674585",
            "extra": "mean: 781.1148170424257 usec\nrounds: 1197"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8297.283224035144,
            "unit": "iter/sec",
            "range": "stddev: 0.0001457814470612067",
            "extra": "mean: 120.52137705788459 usec\nrounds: 1761"
          }
        ]
      }
    ]
  }
}