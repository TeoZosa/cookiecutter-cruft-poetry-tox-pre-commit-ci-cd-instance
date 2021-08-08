window.BENCHMARK_DATA = {
  "lastUpdate": 1628455218055,
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
          "id": "d578f81d1ba6ea92f508b126d0cca905e2f264e4",
          "message": ":recycle: Specify project name in Typer instance instantiation\n\nUsing as single source of truth.\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@87b1ede",
          "timestamp": "2021-08-08T20:31:49Z",
          "tree_id": "2302296d71a7a406beac5ef1e26904ebd8225aba"
        },
        "date": 1628455216196,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1414.8113382352828,
            "unit": "iter/sec",
            "range": "stddev: 0.000018477695502766483",
            "extra": "mean: 706.8080195394223 usec\nrounds: 563"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 2117.099852784884,
            "unit": "iter/sec",
            "range": "stddev: 0.000014811652217343384",
            "extra": "mean: 472.344277330413 usec\nrounds: 1738"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 15339.622300876377,
            "unit": "iter/sec",
            "range": "stddev: 0.000003899617887733169",
            "extra": "mean: 65.19065335414865 usec\nrounds: 2028"
          }
        ]
      }
    ]
  }
}