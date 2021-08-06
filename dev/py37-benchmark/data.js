window.BENCHMARK_DATA = {
  "lastUpdate": 1628258376672,
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
          "id": "d18c7a3f4684929a10c2774c2bc313fd2ea1b8e8",
          "message": "Merge pull request #270 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/dot-github/workflows/pip-21.2.3\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@557a2cb",
          "timestamp": "2021-08-06T13:41:33Z",
          "tree_id": "7aa816e2a9e658023b51dd9214cc4c8c415c373f"
        },
        "date": 1628258374015,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 940.3270279518388,
            "unit": "iter/sec",
            "range": "stddev: 0.00017237950215038826",
            "extra": "mean: 1.0634598073588686 msec\nrounds: 462"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1273.9041998546033,
            "unit": "iter/sec",
            "range": "stddev: 0.00027898843497038136",
            "extra": "mean: 784.9883846164685 usec\nrounds: 1144"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8140.510039616724,
            "unit": "iter/sec",
            "range": "stddev: 0.00006040217486767941",
            "extra": "mean: 122.84242573664126 usec\nrounds: 1764"
          }
        ]
      }
    ]
  }
}