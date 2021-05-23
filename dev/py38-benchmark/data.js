window.BENCHMARK_DATA = {
  "lastUpdate": 1621733530335,
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
          "id": "22aaf7a8892c9478e58e2c371293cb0cdd2a0aac",
          "message": ":wrench: Migrate Poetry install script to `install-poetry.py`\n\nIn preparation for Poetry version `1.2.0`.\n- See Also: https://github.com/python-poetry/poetry/releases/tag/1.2.0a1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@8c59f3e",
          "timestamp": "2021-05-23T01:25:07Z",
          "tree_id": "ed9aece0ce38961bef59cd9cbddc584a529124b7",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/22aaf7a8892c9478e58e2c371293cb0cdd2a0aac"
        },
        "date": 1621733528328,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 945.5226603808902,
            "unit": "iter/sec",
            "range": "stddev: 0.00015371684413731425",
            "extra": "mean: 1.0576161121269843 msec\nrounds: 437"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1292.2726247276235,
            "unit": "iter/sec",
            "range": "stddev: 0.00029059419834983523",
            "extra": "mean: 773.8305221862711 usec\nrounds: 1172"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8909.593174090762,
            "unit": "iter/sec",
            "range": "stddev: 0.00003931831840942441",
            "extra": "mean: 112.2385703208106 usec\nrounds: 1806"
          }
        ]
      }
    ]
  }
}