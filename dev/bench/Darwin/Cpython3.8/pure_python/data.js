window.BENCHMARK_DATA = {
  "lastUpdate": 1633124268827,
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
        "date": 1633124265970,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 302.09241748032196,
            "unit": "iter/sec",
            "range": "stddev: 0.00016636284380196613",
            "extra": "mean: 3.31024528301886 msec\nrounds: 318"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 912.3942590208366,
            "unit": "iter/sec",
            "range": "stddev: 0.00008576302893554038",
            "extra": "mean: 1.0960174180328361 msec\nrounds: 976"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1756.449311687818,
            "unit": "iter/sec",
            "range": "stddev: 0.00002946706848215314",
            "extra": "mean: 569.3304061470888 usec\nrounds: 1822"
          }
        ]
      }
    ]
  }
}