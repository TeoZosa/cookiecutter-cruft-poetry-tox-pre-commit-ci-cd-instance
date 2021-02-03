window.BENCHMARK_DATA = {
  "lastUpdate": 1612361820836,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action",
            "username": "actions-user"
          },
          "distinct": true,
          "id": "b598db630d2623785e689a40783b94845e6a6bb6",
          "message": "Merge pull request #62 from TeoZosa/dependabot/pip/tox-3.21.4\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@16ce6d0",
          "timestamp": "2021-02-03T14:12:04Z",
          "tree_id": "3d46a0a78b0a929c3590e35915f06454f901c5d9",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/b598db630d2623785e689a40783b94845e6a6bb6"
        },
        "date": 1612361819751,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 946.025894267322,
            "unit": "iter/sec",
            "range": "stddev: 0.00021215459247778787",
            "extra": "mean: 1.0570535183653507 msec\nrounds: 490"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1316.8627101094526,
            "unit": "iter/sec",
            "range": "stddev: 0.00017265054161704052",
            "extra": "mean: 759.3806038572418 usec\nrounds: 1141"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 9102.742223333413,
            "unit": "iter/sec",
            "range": "stddev: 0.000011040803617454778",
            "extra": "mean: 109.85700522603629 usec\nrounds: 1531"
          }
        ]
      }
    ]
  }
}