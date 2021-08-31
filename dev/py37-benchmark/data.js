window.BENCHMARK_DATA = {
  "lastUpdate": 1630420168622,
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
          "id": "28c1ea217a9e711a3f0acc44acd06cb275bbd007",
          "message": "Merge pull request #312 from TeoZosa/dependabot/pip/pytest-6.2.5\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@2c4c6a3",
          "timestamp": "2021-08-31T13:59:14Z",
          "tree_id": "6f00cd90ee0895aec069a49b0d08e8d15e720fae"
        },
        "date": 1630420101098,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 276.119323763035,
            "unit": "iter/sec",
            "range": "stddev: 0.00025535176970149055",
            "extra": "mean: 3.6216226607095336 msec\nrounds: 112"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 809.90943992606,
            "unit": "iter/sec",
            "range": "stddev: 0.00009211592266007658",
            "extra": "mean: 1.2347059445205308 msec\nrounds: 739"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1620.1078534092867,
            "unit": "iter/sec",
            "range": "stddev: 0.0001461244552886572",
            "extra": "mean: 617.2428569466175 usec\nrounds: 727"
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
          "id": "85cb138fda3d140631d044d56c8f7487fb00ea8c",
          "message": "Merge pull request #204 from TeoZosa/dependabot/pip/hypothesis-6.17.4",
          "timestamp": "2021-08-31T13:35:43Z",
          "tree_id": "d34c133d1f90bf01ec0fc2afe5717c49021378ea"
        },
        "date": 1630420166268,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 312.17065589335607,
            "unit": "iter/sec",
            "range": "stddev: 0.00010779198167931408",
            "extra": "mean: 3.2033760416661985 msec\nrounds: 120"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 903.8854718880041,
            "unit": "iter/sec",
            "range": "stddev: 0.00004715458595844512",
            "extra": "mean: 1.1063348522586995 msec\nrounds: 819"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1845.4809005751615,
            "unit": "iter/sec",
            "range": "stddev: 0.000019805392822832853",
            "extra": "mean: 541.8641827657716 usec\nrounds: 766"
          }
        ]
      }
    ]
  }
}