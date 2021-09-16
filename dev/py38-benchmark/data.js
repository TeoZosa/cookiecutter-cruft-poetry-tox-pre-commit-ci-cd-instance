window.BENCHMARK_DATA = {
  "lastUpdate": 1631753237353,
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
        "date": 1631713944546,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 300.8586753732967,
            "unit": "iter/sec",
            "range": "stddev: 0.0009904960292479933",
            "extra": "mean: 3.3238197261861537 msec\nrounds: 84"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 894.434613811273,
            "unit": "iter/sec",
            "range": "stddev: 0.00037762288237208017",
            "extra": "mean: 1.1180247103126997 msec\nrounds: 863"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1740.686758835156,
            "unit": "iter/sec",
            "range": "stddev: 0.00039470498646764326",
            "extra": "mean: 574.4859004208124 usec\nrounds: 713"
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
        "date": 1631753234347,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 292.9473935528713,
            "unit": "iter/sec",
            "range": "stddev: 0.0003845115689958331",
            "extra": "mean: 3.4135821721162354 msec\nrounds: 122"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 875.3963995573115,
            "unit": "iter/sec",
            "range": "stddev: 0.00021721126454709775",
            "extra": "mean: 1.1423396309439937 msec\nrounds: 821"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1723.4960252638136,
            "unit": "iter/sec",
            "range": "stddev: 0.00025985113971252087",
            "extra": "mean: 580.2160175257329 usec\nrounds: 799"
          }
        ]
      }
    ]
  }
}