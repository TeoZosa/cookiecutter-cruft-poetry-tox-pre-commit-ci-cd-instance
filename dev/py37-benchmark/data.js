window.BENCHMARK_DATA = {
  "lastUpdate": 1623175345184,
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
        "date": 1623175343508,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 926.6379903321981,
            "unit": "iter/sec",
            "range": "stddev: 0.0005630600068713517",
            "extra": "mean: 1.0791700863046871 msec\nrounds: 533"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1251.662111483401,
            "unit": "iter/sec",
            "range": "stddev: 0.0003784752441487472",
            "extra": "mean: 798.937661230997 usec\nrounds: 1104"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8499.595063366733,
            "unit": "iter/sec",
            "range": "stddev: 0.000028978102500452654",
            "extra": "mean: 117.65266374982986 usec\nrounds: 1600"
          }
        ]
      }
    ]
  }
}