window.BENCHMARK_DATA = {
  "lastUpdate": 1625146596211,
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
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "ad6a0b39aa7c7ee2e80ce1ad2f8e7e2002a61102",
          "message": "Merge pull request #236 from TeoZosa/dependabot/pip/dot-github/workflows/cruft-2.9.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@5e25fa4",
          "timestamp": "2021-07-01T13:20:18Z",
          "tree_id": "80ca54ff6e786e7bffa5e84292ebfedcba4030a8"
        },
        "date": 1625146393401,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1102.7092393765838,
            "unit": "iter/sec",
            "range": "stddev: 0.00005473927210314983",
            "extra": "mean: 906.8573693690547 usec\nrounds: 555"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1605.8452017187908,
            "unit": "iter/sec",
            "range": "stddev: 0.00005519484152217028",
            "extra": "mean: 622.7250291184145 usec\nrounds: 1305"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 12368.269426471079,
            "unit": "iter/sec",
            "range": "stddev: 0.000010119648595874038",
            "extra": "mean: 80.85205500615622 usec\nrounds: 1618"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "4dbc063d6ff65977ec21245be9e16a2e67fa679f",
          "message": "Merge pull request #238 from TeoZosa/dependabot/pip/pylint-2.9.3\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@203fa51",
          "timestamp": "2021-07-01T13:29:17Z",
          "tree_id": "2ab5bb9b318e9f530ef588e9b3ebd57bd663ed60"
        },
        "date": 1625146593769,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 953.9015524522994,
            "unit": "iter/sec",
            "range": "stddev: 0.00019090032721232747",
            "extra": "mean: 1.0483262108434466 msec\nrounds: 498"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1273.1484408669382,
            "unit": "iter/sec",
            "range": "stddev: 0.0002616568297791017",
            "extra": "mean: 785.4543648649953 usec\nrounds: 1332"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8011.279035705041,
            "unit": "iter/sec",
            "range": "stddev: 0.00005045637107475063",
            "extra": "mean: 124.82401318730173 usec\nrounds: 1820"
          }
        ]
      }
    ]
  }
}