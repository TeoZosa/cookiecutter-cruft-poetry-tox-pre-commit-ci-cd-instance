window.BENCHMARK_DATA = {
  "lastUpdate": 1628368777818,
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
        "date": 1628368775340,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1009.5331256728755,
            "unit": "iter/sec",
            "range": "stddev: 0.000022348574777727004",
            "extra": "mean: 990.5568966184032 usec\nrounds: 474"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1492.3820242725476,
            "unit": "iter/sec",
            "range": "stddev: 0.000027007627756933794",
            "extra": "mean: 670.0697165576246 usec\nrounds: 1256"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 11375.774683047444,
            "unit": "iter/sec",
            "range": "stddev: 0.0000073277017235308785",
            "extra": "mean: 87.90610115460824 usec\nrounds: 1473"
          }
        ]
      }
    ]
  }
}