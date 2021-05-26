window.BENCHMARK_DATA = {
  "lastUpdate": 1622045907809,
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
          "id": "1e20b35d70c50a9d25c2b9e52f1c38f40a900d80",
          "message": ":construction_worker: :cookie: Enable automated dependency updates for all cookiecutter dependencies\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@83e3a2e",
          "timestamp": "2021-05-26T16:11:56Z",
          "tree_id": "5e5843b25f62e2cc3fd1ab54b3f7d39e1b8d8e4c",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/1e20b35d70c50a9d25c2b9e52f1c38f40a900d80"
        },
        "date": 1622045906423,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1000.5756862967698,
            "unit": "iter/sec",
            "range": "stddev: 0.0001348058203286197",
            "extra": "mean: 999.4246449272614 usec\nrounds: 552"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1270.227037999073,
            "unit": "iter/sec",
            "range": "stddev: 0.00013191012010606317",
            "extra": "mean: 787.2608361220617 usec\nrounds: 1196"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8711.250103209375,
            "unit": "iter/sec",
            "range": "stddev: 0.000020922950220792107",
            "extra": "mean: 114.79408674440225 usec\nrounds: 1637"
          }
        ]
      }
    ]
  }
}