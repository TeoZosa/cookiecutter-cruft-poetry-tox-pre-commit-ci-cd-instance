window.BENCHMARK_DATA = {
  "lastUpdate": 1622045960542,
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
        "date": 1622045958400,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 927.0173808043718,
            "unit": "iter/sec",
            "range": "stddev: 0.00016321316116047673",
            "extra": "mean: 1.0787284259247667 msec\nrounds: 324"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1280.020129043947,
            "unit": "iter/sec",
            "range": "stddev: 0.00025700512766513474",
            "extra": "mean: 781.2377143997765 usec\nrounds: 1250"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8466.930294735304,
            "unit": "iter/sec",
            "range": "stddev: 0.00005385450841732615",
            "extra": "mean: 118.1065587160668 usec\nrounds: 1652"
          }
        ]
      }
    ]
  }
}