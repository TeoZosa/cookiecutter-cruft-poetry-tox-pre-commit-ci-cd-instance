window.BENCHMARK_DATA = {
  "lastUpdate": 1621706380646,
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
        "date": 1621706379554,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1313.5501677117163,
            "unit": "iter/sec",
            "range": "stddev: 0.00009425999291062767",
            "extra": "mean: 761.2956281236371 usec\nrounds: 640"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1937.1644650646003,
            "unit": "iter/sec",
            "range": "stddev: 0.00007051862714559078",
            "extra": "mean: 516.2184306156225 usec\nrounds: 1607"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 14972.641880120707,
            "unit": "iter/sec",
            "range": "stddev: 0.000011665177818722093",
            "extra": "mean: 66.78848048370861 usec\nrounds: 1896"
          }
        ]
      }
    ]
  }
}