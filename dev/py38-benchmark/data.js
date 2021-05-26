window.BENCHMARK_DATA = {
  "lastUpdate": 1622045984635,
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
        "date": 1622045982411,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 833.8816825510886,
            "unit": "iter/sec",
            "range": "stddev: 0.0007506906009568578",
            "extra": "mean: 1.1992108963716612 msec\nrounds: 193"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1309.0767986886535,
            "unit": "iter/sec",
            "range": "stddev: 0.0001765009303994185",
            "extra": "mean: 763.8971227675364 usec\nrounds: 1287"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8192.1629136095,
            "unit": "iter/sec",
            "range": "stddev: 0.00004971639098554787",
            "extra": "mean: 122.06788494632072 usec\nrounds: 1747"
          }
        ]
      }
    ]
  }
}