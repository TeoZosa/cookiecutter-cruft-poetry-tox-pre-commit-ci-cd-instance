window.BENCHMARK_DATA = {
  "lastUpdate": 1628369452122,
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
        "date": 1628369450085,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1095.5196604328698,
            "unit": "iter/sec",
            "range": "stddev: 0.00031154152796056256",
            "extra": "mean: 912.8088122169096 usec\nrounds: 442"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1629.910639322312,
            "unit": "iter/sec",
            "range": "stddev: 0.00003575843872829027",
            "extra": "mean: 613.5305677959021 usec\nrounds: 1298"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 12084.811205044032,
            "unit": "iter/sec",
            "range": "stddev: 0.000007877657675523747",
            "extra": "mean: 82.7484999999515 usec\nrounds: 1646"
          }
        ]
      }
    ]
  }
}