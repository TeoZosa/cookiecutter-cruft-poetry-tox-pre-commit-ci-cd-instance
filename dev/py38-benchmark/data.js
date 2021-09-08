window.BENCHMARK_DATA = {
  "lastUpdate": 1631121417172,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "d4465ddeafcf95878d84e00ac2513a8f026c4529",
          "message": ":cookie: :memo: Hyperlink full text corresponding to reference\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@17433b3",
          "timestamp": "2021-09-08T17:07:09Z",
          "tree_id": "f681d196c4b109270b75a167e655897538a7ca00"
        },
        "date": 1631121414679,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 299.40373745692955,
            "unit": "iter/sec",
            "range": "stddev: 0.0004539414822061578",
            "extra": "mean: 3.3399716666658317 msec\nrounds: 126"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 889.645967191379,
            "unit": "iter/sec",
            "range": "stddev: 0.00037193449368849143",
            "extra": "mean: 1.1240426381710127 msec\nrounds: 1006"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1849.4029908788311,
            "unit": "iter/sec",
            "range": "stddev: 0.00013012801689892142",
            "extra": "mean: 540.7150334091343 usec\nrounds: 898"
          }
        ]
      }
    ]
  }
}