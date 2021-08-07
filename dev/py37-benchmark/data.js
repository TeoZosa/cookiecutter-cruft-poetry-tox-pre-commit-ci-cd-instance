window.BENCHMARK_DATA = {
  "lastUpdate": 1628301401920,
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
        "date": 1628301399117,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1072.833454740088,
            "unit": "iter/sec",
            "range": "stddev: 0.000046215855879925394",
            "extra": "mean: 932.1111264583625 usec\nrounds: 514"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1538.0835248539668,
            "unit": "iter/sec",
            "range": "stddev: 0.00003654423767563811",
            "extra": "mean: 650.1597500011874 usec\nrounds: 1296"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 11932.843672549332,
            "unit": "iter/sec",
            "range": "stddev: 0.000009235796981991945",
            "extra": "mean: 83.80232134444445 usec\nrounds: 1696"
          }
        ]
      }
    ]
  }
}