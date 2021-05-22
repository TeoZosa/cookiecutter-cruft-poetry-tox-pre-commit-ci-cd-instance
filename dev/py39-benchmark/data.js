window.BENCHMARK_DATA = {
  "lastUpdate": 1621708464950,
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
        "date": 1621708463915,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1382.9808948821183,
            "unit": "iter/sec",
            "range": "stddev: 0.00009276807601458744",
            "extra": "mean: 723.0757877427059 usec\nrounds: 702"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 2003.8913963008158,
            "unit": "iter/sec",
            "range": "stddev: 0.00007193413770840743",
            "extra": "mean: 499.0290401196394 usec\nrounds: 1695"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 16273.786982284884,
            "unit": "iter/sec",
            "range": "stddev: 0.000011119019882595331",
            "extra": "mean: 61.44851232774323 usec\nrounds: 1663"
          }
        ]
      }
    ]
  }
}