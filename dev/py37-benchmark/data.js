window.BENCHMARK_DATA = {
  "lastUpdate": 1629733329900,
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
          "id": "4b8a04803517c49492e734b63f8f869ca1772960",
          "message": "Merge pull request #299 from TeoZosa/dependabot/pip/tox-3.24.3\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@d42a220",
          "timestamp": "2021-08-23T15:03:45Z",
          "tree_id": "de5f460f0f345effcec799d7724ff7a5b38f6dae"
        },
        "date": 1629733327937,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 268.09048150594464,
            "unit": "iter/sec",
            "range": "stddev: 0.00025622299245832945",
            "extra": "mean: 3.730083941744966 msec\nrounds: 103"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 766.4332931633024,
            "unit": "iter/sec",
            "range": "stddev: 0.0002916667846833145",
            "extra": "mean: 1.304744990751507 msec\nrounds: 757"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1563.5579509003876,
            "unit": "iter/sec",
            "range": "stddev: 0.0000940958678504514",
            "extra": "mean: 639.5669565199945 usec\nrounds: 483"
          }
        ]
      }
    ]
  }
}