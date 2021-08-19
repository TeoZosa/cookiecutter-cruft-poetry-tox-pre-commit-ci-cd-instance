window.BENCHMARK_DATA = {
  "lastUpdate": 1629383429348,
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
          "id": "63e2f1babb0b1a7ea57c58aa8116add009bb46f9",
          "message": "Merge pull request #290 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/dot-github/workflows/tox-3.24.2\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@a026421",
          "timestamp": "2021-08-19T13:55:27Z",
          "tree_id": "de58abc5af22d16f8da05953ab7f23b3aa99c4d4"
        },
        "date": 1629383426685,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 311.89097941351116,
            "unit": "iter/sec",
            "range": "stddev: 0.00003704039354254379",
            "extra": "mean: 3.206248548388379 msec\nrounds: 124"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 907.8347103199303,
            "unit": "iter/sec",
            "range": "stddev: 0.000016806304451379727",
            "extra": "mean: 1.1015221037842777 msec\nrounds: 819"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1879.6884586657684,
            "unit": "iter/sec",
            "range": "stddev: 0.00001234380178003576",
            "extra": "mean: 532.0030536921076 usec\nrounds: 745"
          }
        ]
      }
    ]
  }
}