window.BENCHMARK_DATA = {
  "lastUpdate": 1621733527455,
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
        "date": 1621733525472,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1059.9051228996045,
            "unit": "iter/sec",
            "range": "stddev: 0.00010933285618019615",
            "extra": "mean: 943.4806742553325 usec\nrounds: 571"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1404.8094843736865,
            "unit": "iter/sec",
            "range": "stddev: 0.00010606749785928166",
            "extra": "mean: 711.8402965835865 usec\nrounds: 1288"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8782.60781135413,
            "unit": "iter/sec",
            "range": "stddev: 0.0001525486700692463",
            "extra": "mean: 113.86139760302206 usec\nrounds: 1836"
          }
        ]
      }
    ]
  }
}