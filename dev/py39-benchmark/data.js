window.BENCHMARK_DATA = {
  "lastUpdate": 1628308474464,
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
          "id": "79c4bef76961f7d10a0c059879219ab5fd29dbe6",
          "message": ":bookmark: Bump version number to `0.3.1`\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@8fe7192",
          "timestamp": "2021-08-07T03:47:06Z",
          "tree_id": "45d6915a6e7ae0068ac98902b8d933360011ab0a"
        },
        "date": 1628308471726,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1016.0952014099797,
            "unit": "iter/sec",
            "range": "stddev: 0.00020827205550118347",
            "extra": "mean: 984.1597505945848 usec\nrounds: 421"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1404.6787717703337,
            "unit": "iter/sec",
            "range": "stddev: 0.0001800249732375573",
            "extra": "mean: 711.9065369939974 usec\nrounds: 1311"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 9468.019245973956,
            "unit": "iter/sec",
            "range": "stddev: 0.00004034280171230809",
            "extra": "mean: 105.61871221641482 usec\nrounds: 1727"
          }
        ]
      }
    ]
  }
}