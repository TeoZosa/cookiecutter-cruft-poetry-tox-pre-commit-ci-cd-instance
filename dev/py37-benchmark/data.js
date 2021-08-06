window.BENCHMARK_DATA = {
  "lastUpdate": 1628292793083,
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
          "id": "21a056a20e74f1fda2c2056fcb705259a7764c09",
          "message": ":arrow_up: Update `poetry.lock` lockfile\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@ec3211f",
          "timestamp": "2021-08-06T23:25:56Z",
          "tree_id": "a012880cf98a31bafee961ddc1a4bbe224e9c1ad"
        },
        "date": 1628292791010,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1113.4156119092293,
            "unit": "iter/sec",
            "range": "stddev: 0.00006152029393327127",
            "extra": "mean: 898.1372178581637 usec\nrounds: 560"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1575.969245908493,
            "unit": "iter/sec",
            "range": "stddev: 0.000052095933535522135",
            "extra": "mean: 634.5301487298592 usec\nrounds: 1338"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 12546.55968207038,
            "unit": "iter/sec",
            "range": "stddev: 0.000010597457880569096",
            "extra": "mean: 79.70312383155095 usec\nrounds: 1712"
          }
        ]
      }
    ]
  }
}