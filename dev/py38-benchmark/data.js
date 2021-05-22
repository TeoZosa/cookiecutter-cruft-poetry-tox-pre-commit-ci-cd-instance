window.BENCHMARK_DATA = {
  "lastUpdate": 1621706397418,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action",
            "username": "actions-user"
          },
          "distinct": true,
          "id": "d475b05005752e57b458d7c492f93bab450b5b19",
          "message": ":boom: Enforce type annotations across codebase\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@ec4955a",
          "timestamp": "2021-05-22T17:53:49Z",
          "tree_id": "75e8ad1b3bd99a19ded3ef120c7e3486e142d24d",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/d475b05005752e57b458d7c492f93bab450b5b19"
        },
        "date": 1621706396284,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1062.0901782215722,
            "unit": "iter/sec",
            "range": "stddev: 0.0001250388807621589",
            "extra": "mean: 941.5396361865056 usec\nrounds: 525"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1506.9472348675658,
            "unit": "iter/sec",
            "range": "stddev: 0.00017869050821566198",
            "extra": "mean: 663.5932412642719 usec\nrounds: 1202"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8776.003927628955,
            "unit": "iter/sec",
            "range": "stddev: 0.00005029896320434228",
            "extra": "mean: 113.94707753625327 usec\nrounds: 1883"
          }
        ]
      }
    ]
  }
}