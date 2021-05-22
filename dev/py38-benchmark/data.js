window.BENCHMARK_DATA = {
  "lastUpdate": 1621715335849,
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
          "id": "e15ab8a8c584ef517529fc0cf99113be8081b9d1",
          "message": ":memo: :cookie: Update project preamble\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@3b83156",
          "timestamp": "2021-05-22T20:18:07Z",
          "tree_id": "204795b7ec9e448ad42c01054a031d78bbffefa0",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/e15ab8a8c584ef517529fc0cf99113be8081b9d1"
        },
        "date": 1621715221364,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 879.6125271298299,
            "unit": "iter/sec",
            "range": "stddev: 0.0003041010458170041",
            "extra": "mean: 1.1368642091342123 msec\nrounds: 416"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1175.0985389851173,
            "unit": "iter/sec",
            "range": "stddev: 0.0003430947462172895",
            "extra": "mean: 850.9924630351916 usec\nrounds: 1028"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8505.47108901816,
            "unit": "iter/sec",
            "range": "stddev: 0.000030082541763588294",
            "extra": "mean: 117.57138311729143 usec\nrounds: 1232"
          }
        ]
      },
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
          "id": "77c2b11a6481fa2726af145db90d15437f975175",
          "message": ":construction_worker: Run other auto-formatting hooks prior to test instance update\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@8a4b555",
          "timestamp": "2021-05-22T20:22:20Z",
          "tree_id": "9b5ac9091ed2f759a4902fc1c77a68ec23b7534b",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/77c2b11a6481fa2726af145db90d15437f975175"
        },
        "date": 1621715334703,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1428.3796300001377,
            "unit": "iter/sec",
            "range": "stddev: 0.00001845120833596412",
            "extra": "mean: 700.0939939194622 usec\nrounds: 658"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 2111.016120100944,
            "unit": "iter/sec",
            "range": "stddev: 0.000014825710080888655",
            "extra": "mean: 473.7055252577523 usec\nrounds: 1742"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13629.74966143293,
            "unit": "iter/sec",
            "range": "stddev: 0.000006532877885055783",
            "extra": "mean: 73.36891908070947 usec\nrounds: 1829"
          }
        ]
      }
    ]
  }
}