window.BENCHMARK_DATA = {
  "lastUpdate": 1628301471070,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "b2a34b701fcac837c61d9e5e4bec1d5259b19ff6",
          "message": ":coffin: Remove unused checkout step in `verify-user-install` job\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@795e151",
          "timestamp": "2021-08-07T01:49:19Z",
          "tree_id": "a261b86da83d0009d9b43cfcc09cbd11187f5ce8"
        },
        "date": 1628301468156,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 823.500524901321,
            "unit": "iter/sec",
            "range": "stddev: 0.0002544321992493627",
            "extra": "mean: 1.2143283091651078 msec\nrounds: 469"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1232.4463940055812,
            "unit": "iter/sec",
            "range": "stddev: 0.00016836101937128722",
            "extra": "mean: 811.3943169162062 usec\nrounds: 934"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 7610.635602328302,
            "unit": "iter/sec",
            "range": "stddev: 0.00006352594692686845",
            "extra": "mean: 131.3950703005768 usec\nrounds: 1835"
          }
        ]
      }
    ]
  }
}