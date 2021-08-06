window.BENCHMARK_DATA = {
  "lastUpdate": 1628292751794,
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
        "date": 1628292749205,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1121.5685533646283,
            "unit": "iter/sec",
            "range": "stddev: 0.0001328485768297041",
            "extra": "mean: 891.6084505044912 usec\nrounds: 495"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1613.9843884731367,
            "unit": "iter/sec",
            "range": "stddev: 0.00009733022844190175",
            "extra": "mean: 619.584679468939 usec\nrounds: 1432"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 10091.74100573244,
            "unit": "iter/sec",
            "range": "stddev: 0.00004065621874755647",
            "extra": "mean: 99.09092984371748 usec\nrounds: 1682"
          }
        ]
      }
    ]
  }
}