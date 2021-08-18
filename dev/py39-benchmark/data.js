window.BENCHMARK_DATA = {
  "lastUpdate": 1629251543879,
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
        "date": 1629251542150,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 374.4289670230498,
            "unit": "iter/sec",
            "range": "stddev: 0.00003203024336618578",
            "extra": "mean: 2.6707335384616226 msec\nrounds: 143"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1064.18519133188,
            "unit": "iter/sec",
            "range": "stddev: 0.000015065360040310014",
            "extra": "mean: 939.6860698168998 usec\nrounds: 931"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2275.53707074526,
            "unit": "iter/sec",
            "range": "stddev: 0.000009939556522024464",
            "extra": "mean: 439.45669479798477 usec\nrounds: 865"
          }
        ]
      }
    ]
  }
}