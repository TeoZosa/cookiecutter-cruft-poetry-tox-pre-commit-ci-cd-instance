window.BENCHMARK_DATA = {
  "lastUpdate": 1621708578128,
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
          "id": "650e9ed0740dbdc7330ab8e14e909bab5c2af4ef",
          "message": ":memo: :cookie: Add new feature documentation\n\nSee Also:\n    - #168\n    - #172\n    - #173\n    - #175\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@a7f05ee",
          "timestamp": "2021-05-22T18:29:07Z",
          "tree_id": "8bd4c3d932afc0af2fbaa9da96192eff0cd1bd48",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/650e9ed0740dbdc7330ab8e14e909bab5c2af4ef"
        },
        "date": 1621708576516,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1100.06482908222,
            "unit": "iter/sec",
            "range": "stddev: 0.000031360501181759916",
            "extra": "mean: 909.0373344944555 usec\nrounds: 568"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1620.0859843884061,
            "unit": "iter/sec",
            "range": "stddev: 0.000030451718857538542",
            "extra": "mean: 617.2511889098943 usec\nrounds: 1371"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 12046.094004697714,
            "unit": "iter/sec",
            "range": "stddev: 0.00000780940978334486",
            "extra": "mean: 83.01446092069527 usec\nrounds: 1638"
          }
        ]
      }
    ]
  }
}