window.BENCHMARK_DATA = {
  "lastUpdate": 1629382391599,
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
        "date": 1629382388773,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 281.011745431915,
            "unit": "iter/sec",
            "range": "stddev: 0.0003057295426679977",
            "extra": "mean: 3.558570117640457 msec\nrounds: 119"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 778.1931147878853,
            "unit": "iter/sec",
            "range": "stddev: 0.0002755481592680524",
            "extra": "mean: 1.285028074647735 msec\nrounds: 777"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1672.9069007629057,
            "unit": "iter/sec",
            "range": "stddev: 0.00010207110892271646",
            "extra": "mean: 597.7618955029501 usec\nrounds: 689"
          }
        ]
      }
    ]
  }
}