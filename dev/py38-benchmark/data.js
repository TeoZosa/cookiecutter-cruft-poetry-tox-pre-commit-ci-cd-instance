window.BENCHMARK_DATA = {
  "lastUpdate": 1619995006526,
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
          "id": "28629ee6af9aee67c9906e766f7bbecc4524c5a1",
          "message": ":arrow_up: Upgrade template dependencies\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@f346cea",
          "timestamp": "2021-05-02T22:32:19Z",
          "tree_id": "4e3fb448711e5ff8e4ac976e100fb90cf3c84641",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/28629ee6af9aee67c9906e766f7bbecc4524c5a1"
        },
        "date": 1619995005191,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1417.6892054359137,
            "unit": "iter/sec",
            "range": "stddev: 0.000015297116653155986",
            "extra": "mean: 705.3732201427874 usec\nrounds: 695"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 2086.1417534605657,
            "unit": "iter/sec",
            "range": "stddev: 0.000014677078244152914",
            "extra": "mean: 479.3538110922542 usec\nrounds: 1731"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 15415.534969868702,
            "unit": "iter/sec",
            "range": "stddev: 0.000004280885962597061",
            "extra": "mean: 64.86962677290188 usec\nrounds: 2114"
          }
        ]
      }
    ]
  }
}