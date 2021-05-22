window.BENCHMARK_DATA = {
  "lastUpdate": 1621706440108,
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
        "date": 1621706438891,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1000.6688396250587,
            "unit": "iter/sec",
            "range": "stddev: 0.00030420026303613207",
            "extra": "mean: 999.3316074223824 usec\nrounds: 512"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1509.350902892845,
            "unit": "iter/sec",
            "range": "stddev: 0.000018947150426703503",
            "extra": "mean: 662.536457283316 usec\nrounds: 1229"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 11608.808433784874,
            "unit": "iter/sec",
            "range": "stddev: 0.00000678328011115782",
            "extra": "mean: 86.14148520960349 usec\nrounds: 1589"
          }
        ]
      }
    ]
  }
}