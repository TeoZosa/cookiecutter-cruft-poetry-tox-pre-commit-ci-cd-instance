window.BENCHMARK_DATA = {
  "lastUpdate": 1631195392989,
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
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "dfef1465585ef0caf8d96133fac7328565b198f9",
          "message": "Merge pull request #211 from TeoZosa/dependabot/github_actions/codecov/codecov-action-2.0.3",
          "timestamp": "2021-09-09T13:26:24Z",
          "tree_id": "93f8dfb7fb8f057bdb3b7cfadfda14bf96494935"
        },
        "date": 1631195391094,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 356.559170342861,
            "unit": "iter/sec",
            "range": "stddev: 0.00003443651633879102",
            "extra": "mean: 2.804583595587845 msec\nrounds: 136"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1040.2574938504615,
            "unit": "iter/sec",
            "range": "stddev: 0.0000133267111130979",
            "extra": "mean: 961.3004529278128 usec\nrounds: 956"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2143.73395389022,
            "unit": "iter/sec",
            "range": "stddev: 0.000010392829887879354",
            "extra": "mean: 466.475794809009 usec\nrounds: 809"
          }
        ]
      }
    ]
  }
}