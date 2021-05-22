window.BENCHMARK_DATA = {
  "lastUpdate": 1621715397339,
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
        "date": 1621715133856,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 870.0528562058232,
            "unit": "iter/sec",
            "range": "stddev: 0.00016568013592431754",
            "extra": "mean: 1.1493554591164241 msec\nrounds: 477"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1204.9807921785389,
            "unit": "iter/sec",
            "range": "stddev: 0.00017601876719411928",
            "extra": "mean: 829.8887471824801 usec\nrounds: 1064"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8048.716334528319,
            "unit": "iter/sec",
            "range": "stddev: 0.000022768496850628334",
            "extra": "mean: 124.24341453184077 usec\nrounds: 1679"
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
        "date": 1621715396141,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 953.1059509525833,
            "unit": "iter/sec",
            "range": "stddev: 0.00008983668460136983",
            "extra": "mean: 1.0492012970861722 msec\nrounds: 515"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1311.4158207185878,
            "unit": "iter/sec",
            "range": "stddev: 0.00012460298414955002",
            "extra": "mean: 762.5346470595816 usec\nrounds: 1207"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 9010.402080698876,
            "unit": "iter/sec",
            "range": "stddev: 0.00002234045260915408",
            "extra": "mean: 110.98283861739017 usec\nrounds: 1735"
          }
        ]
      }
    ]
  }
}