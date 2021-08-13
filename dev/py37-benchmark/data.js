window.BENCHMARK_DATA = {
  "lastUpdate": 1628864140019,
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
        "date": 1628864137231,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 299.81405358926594,
            "unit": "iter/sec",
            "range": "stddev: 0.00047550677105161004",
            "extra": "mean: 3.335400685953043 msec\nrounds: 121"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 854.5999024149681,
            "unit": "iter/sec",
            "range": "stddev: 0.0003263977417128129",
            "extra": "mean: 1.1701382099086994 msec\nrounds: 767"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1749.1841772132004,
            "unit": "iter/sec",
            "range": "stddev: 0.00010104372606800712",
            "extra": "mean: 571.6950867879445 usec\nrounds: 772"
          }
        ]
      }
    ]
  }
}