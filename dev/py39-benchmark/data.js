window.BENCHMARK_DATA = {
  "lastUpdate": 1628369439156,
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
          "id": "9ef18c7247125a6eb458eca27b4e109e475ebef8",
          "message": ":memo: Add emojis to all documentation sections\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@ca5fdf0",
          "timestamp": "2021-08-07T20:42:13Z",
          "tree_id": "e1efb335c553d89b84c072bfaa624820e13afff1"
        },
        "date": 1628369437568,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1102.518020040629,
            "unit": "iter/sec",
            "range": "stddev: 0.000033208692281894744",
            "extra": "mean: 907.0146535683372 usec\nrounds: 560"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1595.0013583091318,
            "unit": "iter/sec",
            "range": "stddev: 0.00002298795623073709",
            "extra": "mean: 626.9587137280588 usec\nrounds: 1282"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 12848.370948686856,
            "unit": "iter/sec",
            "range": "stddev: 0.0000068011077154832985",
            "extra": "mean: 77.83087863774693 usec\nrounds: 1821"
          }
        ]
      }
    ]
  }
}