window.BENCHMARK_DATA = {
  "lastUpdate": 1628368708997,
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
          "id": "cc4d9a6a11b72fbbe0cb171c086d38931173b3b3",
          "message": ":memo: :pencil2: Fix casing\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@e7a2f57",
          "timestamp": "2021-08-07T20:31:29Z",
          "tree_id": "ace37f13c639df36de9bb1f1b9d3f6d65f689383"
        },
        "date": 1628368706402,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1247.9849037966374,
            "unit": "iter/sec",
            "range": "stddev: 0.000015521535360601403",
            "extra": "mean: 801.2917439608332 usec\nrounds: 621"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1841.6926903918277,
            "unit": "iter/sec",
            "range": "stddev: 0.0000162865798832437",
            "extra": "mean: 542.9787527620832 usec\nrounds: 1448"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 14773.96121347812,
            "unit": "iter/sec",
            "range": "stddev: 0.000003871931748514679",
            "extra": "mean: 67.68665394137567 usec\nrounds: 2017"
          }
        ]
      }
    ]
  }
}