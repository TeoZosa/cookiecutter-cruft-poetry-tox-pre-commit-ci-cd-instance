window.BENCHMARK_DATA = {
  "lastUpdate": 1628308382401,
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
        "date": 1628308379882,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1442.9832678504415,
            "unit": "iter/sec",
            "range": "stddev: 0.000016951809913491922",
            "extra": "mean: 693.0087287080347 usec\nrounds: 634"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 2143.120288516387,
            "unit": "iter/sec",
            "range": "stddev: 0.000013158548922570945",
            "extra": "mean: 466.60936642630907 usec\nrounds: 1793"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 15690.167114402871,
            "unit": "iter/sec",
            "range": "stddev: 0.0000040816405275260525",
            "extra": "mean: 63.734184136384684 usec\nrounds: 2080"
          }
        ]
      }
    ]
  }
}