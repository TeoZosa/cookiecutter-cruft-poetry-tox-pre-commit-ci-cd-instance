window.BENCHMARK_DATA = {
  "lastUpdate": 1631753170567,
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
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "845d724548a96cb34eb3585010e48412d1f4c61f",
          "message": "Merge pull request #225 from TeoZosa/dependabot/pip/hypothesis-6.21.3",
          "timestamp": "2021-09-15T13:28:06Z",
          "tree_id": "081bca677c9f4d73d14d5640b26fca40d81d51e1"
        },
        "date": 1631713990235,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 268.31842723782626,
            "unit": "iter/sec",
            "range": "stddev: 0.00028132628114700177",
            "extra": "mean: 3.7269151071523003 msec\nrounds: 112"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 789.7527831072207,
            "unit": "iter/sec",
            "range": "stddev: 0.00023065252704030756",
            "extra": "mean: 1.2662190262446156 msec\nrounds: 762"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1613.8131979263012,
            "unit": "iter/sec",
            "range": "stddev: 0.00008713924405183726",
            "extra": "mean: 619.6504039531765 usec\nrounds: 708"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "9a9f5901d2ee5c25f714277e1c2692f07cb026c7",
          "message": ":green_heart: Fix ADR documentation publishing overwriting benchmark files\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@bab682c",
          "timestamp": "2021-09-16T00:36:45Z",
          "tree_id": "983e09eaabaf97efc7ebfaaffadb1a7822b17fc7"
        },
        "date": 1631753167732,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 278.42364188089476,
            "unit": "iter/sec",
            "range": "stddev: 0.0005824299065125807",
            "extra": "mean: 3.5916490181813807 msec\nrounds: 110"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 826.3983354921631,
            "unit": "iter/sec",
            "range": "stddev: 0.0002635908111366602",
            "extra": "mean: 1.2100702010785733 msec\nrounds: 741"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1671.7289722623775,
            "unit": "iter/sec",
            "range": "stddev: 0.00024182076390476088",
            "extra": "mean: 598.1830886418652 usec\nrounds: 722"
          }
        ]
      }
    ]
  }
}