window.BENCHMARK_DATA = {
  "lastUpdate": 1623175251732,
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
        "date": 1623175250675,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1426.6730593759085,
            "unit": "iter/sec",
            "range": "stddev: 0.00002039781255590649",
            "extra": "mean: 700.9314386559212 usec\nrounds: 595"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 2117.1898023991544,
            "unit": "iter/sec",
            "range": "stddev: 0.000016012545095559495",
            "extra": "mean: 472.3242096040806 usec\nrounds: 1770"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 15360.217040790958,
            "unit": "iter/sec",
            "range": "stddev: 0.000004082509340511739",
            "extra": "mean: 65.10324674087458 usec\nrounds: 2071"
          }
        ]
      }
    ]
  }
}