window.BENCHMARK_DATA = {
  "lastUpdate": 1622052407575,
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
          "id": "53b69ce3b3cbaab482397295cbecdc719b1a4adb",
          "message": ":green_heart: Deduplicate Reset Instance workflow runs and document explanation\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@f98e9ad",
          "timestamp": "2021-05-26T18:00:24Z",
          "tree_id": "a6ce466d5fe1cdc297f4742f44e41ffca2737188",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/53b69ce3b3cbaab482397295cbecdc719b1a4adb"
        },
        "date": 1622052406488,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1230.9338525920166,
            "unit": "iter/sec",
            "range": "stddev: 0.000013943015947783316",
            "extra": "mean: 812.3913384088578 usec\nrounds: 591"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1752.2006583509203,
            "unit": "iter/sec",
            "range": "stddev: 0.000015040013743125395",
            "extra": "mean: 570.7108916059577 usec\nrounds: 1513"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13457.81019625447,
            "unit": "iter/sec",
            "range": "stddev: 0.00000468302184812741",
            "extra": "mean: 74.30629392278965 usec\nrounds: 1810"
          }
        ]
      }
    ]
  }
}