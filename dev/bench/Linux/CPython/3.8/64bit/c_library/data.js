window.BENCHMARK_DATA = {
  "lastUpdate": 1633123077337,
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
        "date": 1633123073587,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 266.6948146202535,
            "unit": "iter/sec",
            "range": "stddev: 0.0006958552920912333",
            "extra": "mean: 3.749604211180105 msec\nrounds: 322"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 763.7276698414095,
            "unit": "iter/sec",
            "range": "stddev: 0.00032157355393556947",
            "extra": "mean: 1.3093672515592545 msec\nrounds: 962"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1579.9478536370254,
            "unit": "iter/sec",
            "range": "stddev: 0.00015061053551196458",
            "extra": "mean: 632.9322817193043 usec\nrounds: 1931"
          }
        ]
      }
    ]
  }
}