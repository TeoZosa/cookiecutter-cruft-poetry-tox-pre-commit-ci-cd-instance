window.BENCHMARK_DATA = {
  "lastUpdate": 1629251516623,
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
          "id": "9959128a3a55067f7740c5a7f050b4e884b95def",
          "message": ":green_heart: Re-enable CI failure on Codecov upload failures\n\nsee: codecov/codecov-action/issues/330\nSigned-off-by: Teo Zosa <teofilo@sonosim.com>\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@ad4beb9",
          "timestamp": "2021-08-18T01:43:46Z",
          "tree_id": "c427ef7e4da25f13dac5c9f4b207736450e7d4c2"
        },
        "date": 1629251515009,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 364.384090911231,
            "unit": "iter/sec",
            "range": "stddev: 0.000027626180745685955",
            "extra": "mean: 2.7443569160751693 msec\nrounds: 143"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1063.2111798897179,
            "unit": "iter/sec",
            "range": "stddev: 0.000013187435807913589",
            "extra": "mean: 940.546919478147 usec\nrounds: 919"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2205.250459508311,
            "unit": "iter/sec",
            "range": "stddev: 0.00001009808564254312",
            "extra": "mean: 453.46323166528794 usec\nrounds: 859"
          }
        ]
      }
    ]
  }
}