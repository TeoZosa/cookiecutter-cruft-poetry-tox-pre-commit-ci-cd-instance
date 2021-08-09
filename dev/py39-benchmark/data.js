window.BENCHMARK_DATA = {
  "lastUpdate": 1628520815625,
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
          "id": "dc8f646a9a657bf2459a1c7bdb7eb3c600746cb6",
          "message": "Merge pull request #276 from TeoZosa/dependabot/pip/hypothesis-6.14.6\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@3623d72",
          "timestamp": "2021-08-09T13:33:57Z",
          "tree_id": "8a464aae9b3dc1c2c8b8c8fcf255cdfea81a44a4"
        },
        "date": 1628520813713,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 420.4807151258243,
            "unit": "iter/sec",
            "range": "stddev: 0.000024242204409980346",
            "extra": "mean: 2.3782303540383793 msec\nrounds: 161"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1183.3937846953295,
            "unit": "iter/sec",
            "range": "stddev: 0.00017280790556322171",
            "extra": "mean: 845.0272537619039 usec\nrounds: 997"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2568.3309286755116,
            "unit": "iter/sec",
            "range": "stddev: 0.00001173700240470421",
            "extra": "mean: 389.357924570764 usec\nrounds: 875"
          }
        ]
      }
    ]
  }
}