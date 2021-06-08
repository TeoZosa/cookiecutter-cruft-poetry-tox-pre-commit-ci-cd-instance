window.BENCHMARK_DATA = {
  "lastUpdate": 1623175328943,
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
          "id": "96ae7e327f5033d45ab4e8cf9be0b47469b9f532",
          "message": ":memo: Add `cruft` & `cookiecutter` install steps\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@dee082f",
          "timestamp": "2021-06-08T17:55:03Z",
          "tree_id": "5f15f042da76c29de9fb1f1b7868c60191c91a2a"
        },
        "date": 1623175327250,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 995.4825264920189,
            "unit": "iter/sec",
            "range": "stddev: 0.00019735427217291353",
            "extra": "mean: 1.004537973683878 msec\nrounds: 532"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1414.5038036172714,
            "unit": "iter/sec",
            "range": "stddev: 0.0003419792317000797",
            "extra": "mean: 706.9616903416786 usec\nrounds: 1408"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 9243.265288112681,
            "unit": "iter/sec",
            "range": "stddev: 0.00013385899012414204",
            "extra": "mean: 108.18687648033341 usec\nrounds: 1943"
          }
        ]
      }
    ]
  }
}