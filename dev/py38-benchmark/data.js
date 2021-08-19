window.BENCHMARK_DATA = {
  "lastUpdate": 1629382349017,
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
          "id": "1eafe9a2d03fd3b389d88d484c40aefbffd4b1ad",
          "message": "Merge pull request #289 from TeoZosa/dependabot/pip/tox-3.24.2\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@dbe6159",
          "timestamp": "2021-08-19T13:44:35Z",
          "tree_id": "355b80f1d55343da923b5161e7820845a910da51"
        },
        "date": 1629382346256,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 292.5516324626297,
            "unit": "iter/sec",
            "range": "stddev: 0.00030133755302580114",
            "extra": "mean: 3.418200033895689 msec\nrounds: 118"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 875.6532782158916,
            "unit": "iter/sec",
            "range": "stddev: 0.00016434222374746591",
            "extra": "mean: 1.1420045180867247 msec\nrounds: 691"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1699.2102408042251,
            "unit": "iter/sec",
            "range": "stddev: 0.00010213023601132665",
            "extra": "mean: 588.5086942076729 usec\nrounds: 811"
          }
        ]
      }
    ]
  }
}