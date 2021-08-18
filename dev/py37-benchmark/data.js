window.BENCHMARK_DATA = {
  "lastUpdate": 1629251569924,
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
        "date": 1629251567882,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 292.5143371024364,
            "unit": "iter/sec",
            "range": "stddev: 0.00044245101808118",
            "extra": "mean: 3.4186358518550404 msec\nrounds: 108"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 857.8181299619614,
            "unit": "iter/sec",
            "range": "stddev: 0.0005891236120735946",
            "extra": "mean: 1.165748268860141 msec\nrounds: 729"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1998.2884156874693,
            "unit": "iter/sec",
            "range": "stddev: 0.000050491529232524966",
            "extra": "mean: 500.42826258189103 usec\nrounds: 735"
          }
        ]
      }
    ]
  }
}