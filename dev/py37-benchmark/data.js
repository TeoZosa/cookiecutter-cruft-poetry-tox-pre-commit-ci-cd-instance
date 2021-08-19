window.BENCHMARK_DATA = {
  "lastUpdate": 1629382337334,
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
        "date": 1629382335277,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 291.96758336063107,
            "unit": "iter/sec",
            "range": "stddev: 0.00028626733462670914",
            "extra": "mean: 3.425037767856663 msec\nrounds: 112"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 836.0901407404754,
            "unit": "iter/sec",
            "range": "stddev: 0.000221126314747645",
            "extra": "mean: 1.1960432868091944 msec\nrounds: 781"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1748.6559688627794,
            "unit": "iter/sec",
            "range": "stddev: 0.0001259698979955462",
            "extra": "mean: 571.8677760556526 usec\nrounds: 710"
          }
        ]
      }
    ]
  }
}