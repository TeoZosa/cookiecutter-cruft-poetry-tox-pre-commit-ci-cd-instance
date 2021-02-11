window.BENCHMARK_DATA = {
  "lastUpdate": 1613078136683,
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
          "id": "b6669625accf26a78f34adbe60f2b396b8cc8bd8",
          "message": ":green_heart: Fix Poetry debug mode bug (temporary)\n\nsee: python-poetry/poetry#3663\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@5244538",
          "timestamp": "2021-02-11T21:11:07Z",
          "tree_id": "c2fe987da3569b9921f94ea845cd030d6c9530a6",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/b6669625accf26a78f34adbe60f2b396b8cc8bd8"
        },
        "date": 1613078135672,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 959.9213773258851,
            "unit": "iter/sec",
            "range": "stddev: 0.00010431927639023865",
            "extra": "mean: 1.0417519847154197 msec\nrounds: 458"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1390.0768201546118,
            "unit": "iter/sec",
            "range": "stddev: 0.0001565206762183479",
            "extra": "mean: 719.3847027020958 usec\nrounds: 925"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 9676.992215234643,
            "unit": "iter/sec",
            "range": "stddev: 0.000025263619176092903",
            "extra": "mean: 103.33789443642252 usec\nrounds: 2103"
          }
        ]
      }
    ]
  }
}