window.BENCHMARK_DATA = {
  "lastUpdate": 1621487495633,
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
          "id": "57510490247a21f8d5fa3c7c47d784bada3b8a9c",
          "message": "Merge pull request #173 from TeoZosa/make-package-support-conditionally-included\n\n✨ Make Package Support Conditionally Included\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@e25e61f",
          "timestamp": "2021-05-20T05:04:49Z",
          "tree_id": "12f75f85fa33b76e9cd7b5ccd2004a35ec5e4ad3",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/57510490247a21f8d5fa3c7c47d784bada3b8a9c"
        },
        "date": 1621487493809,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1058.3816371964492,
            "unit": "iter/sec",
            "range": "stddev: 0.00012215954819783315",
            "extra": "mean: 944.838765956771 usec\nrounds: 282"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1442.4792816150978,
            "unit": "iter/sec",
            "range": "stddev: 0.00009074588076105553",
            "extra": "mean: 693.2508582586588 usec\nrounds: 1150"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 9049.014858156326,
            "unit": "iter/sec",
            "range": "stddev: 0.00002878807736174445",
            "extra": "mean: 110.50926710531924 usec\nrounds: 1505"
          }
        ]
      }
    ]
  }
}