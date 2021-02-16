window.BENCHMARK_DATA = {
  "lastUpdate": 1613485067492,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action",
            "username": "actions-user"
          },
          "distinct": true,
          "id": "4e14dd2b8f615788923c8ab3e09baa214dd9583d",
          "message": "Merge pull request #73 from TeoZosa/dependabot/pip/pylint-2.6.2\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@04d81dc",
          "timestamp": "2021-02-16T14:12:15Z",
          "tree_id": "5a5b879844344e53da98379ceb0bdfcf4fe71cc7",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/4e14dd2b8f615788923c8ab3e09baa214dd9583d"
        },
        "date": 1613485066453,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 894.8603260656654,
            "unit": "iter/sec",
            "range": "stddev: 0.00016254222444723944",
            "extra": "mean: 1.1174928319781374 msec\nrounds: 369"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1265.8527379412205,
            "unit": "iter/sec",
            "range": "stddev: 0.00013228178981207554",
            "extra": "mean: 789.9813066932235 usec\nrounds: 1001"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 9272.281301882615,
            "unit": "iter/sec",
            "range": "stddev: 0.0000334580838829579",
            "extra": "mean: 107.84832420873202 usec\nrounds: 1863"
          }
        ]
      }
    ]
  }
}