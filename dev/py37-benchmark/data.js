window.BENCHMARK_DATA = {
  "lastUpdate": 1631195301115,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "a51aba4383a67f4691f444c6176e842f1c66ace4",
          "message": "Merge pull request #324 from TeoZosa/dependabot/pip/hypothesis-6.20.0\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@3cb4674",
          "timestamp": "2021-09-09T13:31:39Z",
          "tree_id": "f7e6ce03e9b5c003ad6f78cc87878f8e33341626"
        },
        "date": 1631195299006,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 334.3596715121159,
            "unit": "iter/sec",
            "range": "stddev: 0.00036595799727370896",
            "extra": "mean: 2.9907913100810783 msec\nrounds: 129"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 966.579610631843,
            "unit": "iter/sec",
            "range": "stddev: 0.0002726487152646286",
            "extra": "mean: 1.0345759304257518 msec\nrounds: 963"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1994.3341797928895,
            "unit": "iter/sec",
            "range": "stddev: 0.00021119485208153554",
            "extra": "mean: 501.4204791414894 usec\nrounds: 791"
          }
        ]
      }
    ]
  }
}