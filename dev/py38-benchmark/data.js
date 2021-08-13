window.BENCHMARK_DATA = {
  "lastUpdate": 1628864236751,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "9651cafc29421421764ec2b77ef5e64ba3038c5c",
          "message": "Merge pull request #280 from TeoZosa/dependabot/pip/dot-github/workflows/pip-21.2.4\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@519bb21",
          "timestamp": "2021-08-13T13:49:21Z",
          "tree_id": "ede1fe055414d5ca5a868f4d9609dcea424ae926"
        },
        "date": 1628864234115,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 253.60733277856406,
            "unit": "iter/sec",
            "range": "stddev: 0.0008689428297489237",
            "extra": "mean: 3.943103651790482 msec\nrounds: 112"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 785.8928499524192,
            "unit": "iter/sec",
            "range": "stddev: 0.0003477158303946196",
            "extra": "mean: 1.272438093896062 msec\nrounds: 639"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1613.5890354514095,
            "unit": "iter/sec",
            "range": "stddev: 0.00009976864705301703",
            "extra": "mean: 619.7364868188046 usec\nrounds: 569"
          }
        ]
      }
    ]
  }
}