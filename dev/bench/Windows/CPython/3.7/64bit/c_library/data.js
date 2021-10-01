window.BENCHMARK_DATA = {
  "lastUpdate": 1633123309253,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "d7eeca1d9e67b4f46517bd1680a8ad8a1193af48",
          "message": "Merge pull request #362 from TeoZosa/streamline-and-expand-performance-testing-workflow\n\n👷‍♀️ Streamline and Expand Performance Testing\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@587e34c",
          "timestamp": "2021-10-01T21:00:00Z",
          "tree_id": "ea2e1a176cf76eab14a790bf919b66f4f819c49c"
        },
        "date": 1633123303856,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 242.4242424242424,
            "unit": "iter/sec",
            "range": "stddev: 0.00018340434230894797",
            "extra": "mean: 4.125 msec\nrounds: 10"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 724.0404040404039,
            "unit": "iter/sec",
            "range": "stddev: 0.0000791917148713095",
            "extra": "mean: 1.381138392857143 msec\nrounds: 10"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1327.800829875519,
            "unit": "iter/sec",
            "range": "stddev: 0.000016137430609197586",
            "extra": "mean: 753.125 usec\nrounds: 10"
          }
        ]
      }
    ]
  }
}