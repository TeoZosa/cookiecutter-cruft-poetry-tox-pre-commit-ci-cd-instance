window.BENCHMARK_DATA = {
  "lastUpdate": 1621715135208,
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
      }
    ]
  }
}