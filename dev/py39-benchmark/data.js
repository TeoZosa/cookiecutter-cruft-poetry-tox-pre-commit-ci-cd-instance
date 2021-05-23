window.BENCHMARK_DATA = {
  "lastUpdate": 1621733524223,
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
        "date": 1621733522287,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 945.9853183836062,
            "unit": "iter/sec",
            "range": "stddev: 0.00020462496973248996",
            "extra": "mean: 1.057098858266308 msec\nrounds: 508"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1355.8917319545908,
            "unit": "iter/sec",
            "range": "stddev: 0.00007871374451778419",
            "extra": "mean: 737.52201332362 usec\nrounds: 1276"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8746.326955672714,
            "unit": "iter/sec",
            "range": "stddev: 0.00003779444441659167",
            "extra": "mean: 114.33370888924037 usec\nrounds: 1271"
          }
        ]
      }
    ]
  }
}