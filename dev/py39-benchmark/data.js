window.BENCHMARK_DATA = {
  "lastUpdate": 1620001002963,
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
          "id": "bd30812da5cb7fe7bd4b29cdd8149c14f3482946",
          "message": ":arrow_up: Update `Go` version to `1.16`\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@07fd0ca",
          "timestamp": "2021-05-03T00:12:16Z",
          "tree_id": "3f5cdab40c1fcda4d5d394a3fae8a61b5ad98389",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/bd30812da5cb7fe7bd4b29cdd8149c14f3482946"
        },
        "date": 1620001001945,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1179.9643206193746,
            "unit": "iter/sec",
            "range": "stddev: 0.0000839893031650949",
            "extra": "mean: 847.4832522690944 usec\nrounds: 551"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1689.2154718037043,
            "unit": "iter/sec",
            "range": "stddev: 0.00004790603230763627",
            "extra": "mean: 591.9907890331028 usec\nrounds: 1550"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 12909.447570065677,
            "unit": "iter/sec",
            "range": "stddev: 0.000007265405329291717",
            "extra": "mean: 77.46264854266825 usec\nrounds: 1784"
          }
        ]
      }
    ]
  }
}