window.BENCHMARK_DATA = {
  "lastUpdate": 1626270837555,
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
          "id": "e8361ae2428d19ac5f556a567364fd0013c158f3",
          "message": "Merge pull request #245 from TeoZosa/dependabot/pip/tox-3.24.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@8d1d5c1",
          "timestamp": "2021-07-14T13:28:00Z",
          "tree_id": "0136d7f92518784c44661cb5658a0ed3adac6248"
        },
        "date": 1626270754757,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1204.4870134212122,
            "unit": "iter/sec",
            "range": "stddev: 0.00020052430583221661",
            "extra": "mean: 830.2289595963435 usec\nrounds: 495"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1817.1503882317802,
            "unit": "iter/sec",
            "range": "stddev: 0.00008552103370180862",
            "extra": "mean: 550.31218465802 usec\nrounds: 1473"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13948.283332682333,
            "unit": "iter/sec",
            "range": "stddev: 0.000011738171286291498",
            "extra": "mean: 71.69341030353836 usec\nrounds: 1611"
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
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "b90056dde643d5309673732dacf0287c7a47ffd6",
          "message": "Merge pull request #102 from TeoZosa/dependabot/pip/tox-3.24.0",
          "timestamp": "2021-07-14T13:24:38Z",
          "tree_id": "fadd9daae8927b240a568909cc259f18fd5c52e9"
        },
        "date": 1626270835790,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1248.0029546480685,
            "unit": "iter/sec",
            "range": "stddev: 0.000021047823693149526",
            "extra": "mean: 801.2801542461057 usec\nrounds: 577"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1863.4800089092244,
            "unit": "iter/sec",
            "range": "stddev: 0.000018750817990859223",
            "extra": "mean: 536.6303878866634 usec\nrounds: 1552"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13679.914466766188,
            "unit": "iter/sec",
            "range": "stddev: 0.000004694960186993485",
            "extra": "mean: 73.09987225646677 usec\nrounds: 1777"
          }
        ]
      }
    ]
  }
}