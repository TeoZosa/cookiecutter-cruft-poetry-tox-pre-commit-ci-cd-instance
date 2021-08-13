window.BENCHMARK_DATA = {
  "lastUpdate": 1628864230385,
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
          "id": "9651cafc29421421764ec2b77ef5e64ba3038c5c",
          "message": "Merge pull request #280 from TeoZosa/dependabot/pip/dot-github/workflows/pip-21.2.4\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@519bb21",
          "timestamp": "2021-08-13T13:49:21Z",
          "tree_id": "ede1fe055414d5ca5a868f4d9609dcea424ae926"
        },
        "date": 1628864226420,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 297.92977605798285,
            "unit": "iter/sec",
            "range": "stddev: 0.00024020165707147224",
            "extra": "mean: 3.3564956589145383 msec\nrounds: 129"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 793.0455643448736,
            "unit": "iter/sec",
            "range": "stddev: 0.0005505684625874255",
            "extra": "mean: 1.2609615953480418 msec\nrounds: 645"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1666.7797895254414,
            "unit": "iter/sec",
            "range": "stddev: 0.00009385835324924589",
            "extra": "mean: 599.9592785347583 usec\nrounds: 736"
          }
        ]
      }
    ]
  }
}