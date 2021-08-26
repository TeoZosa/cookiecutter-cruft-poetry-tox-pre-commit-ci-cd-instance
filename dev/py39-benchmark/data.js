window.BENCHMARK_DATA = {
  "lastUpdate": 1629985252388,
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
          "id": "fbf79cfb7b5c85dde51770acc33e4dc36dde87ae",
          "message": "Merge pull request #301 from TeoZosa/dependabot/pip/importlib-metadata-4.7.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@2eb4b90",
          "timestamp": "2021-08-26T13:25:59Z",
          "tree_id": "f355935d4f258b7d2f7dd89a6ece74071d2e8a23"
        },
        "date": 1629985250335,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 274.18229419419913,
            "unit": "iter/sec",
            "range": "stddev: 0.00024292105890309077",
            "extra": "mean: 3.6472085221218378 msec\nrounds: 113"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 808.2661453069679,
            "unit": "iter/sec",
            "range": "stddev: 0.00011796176902626334",
            "extra": "mean: 1.2372162384955692 msec\nrounds: 717"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1689.30665724061,
            "unit": "iter/sec",
            "range": "stddev: 0.00007316329230149345",
            "extra": "mean: 591.9588345395176 usec\nrounds: 689"
          }
        ]
      }
    ]
  }
}