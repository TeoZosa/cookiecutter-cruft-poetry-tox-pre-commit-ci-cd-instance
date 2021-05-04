window.BENCHMARK_DATA = {
  "lastUpdate": 1620095643257,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action",
            "username": "actions-user"
          },
          "distinct": true,
          "id": "d1a15050c5d710ad6e4413a19de2d093e04ef91c",
          "message": "Merge pull request #157 from TeoZosa/dependabot/pip/dot-github/workflows/pip-21.1.1\n\n⬆️ Bump pip from 21.1 to 21.1.1 in /.github/workflows\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@7892fcc",
          "timestamp": "2021-05-04T02:29:58Z",
          "tree_id": "c9822d66bf36a9629bf4efe08c5b7ace5fe90c12",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/d1a15050c5d710ad6e4413a19de2d093e04ef91c"
        },
        "date": 1620095640124,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1114.7987689770878,
            "unit": "iter/sec",
            "range": "stddev: 0.00003010370499879057",
            "extra": "mean: 897.022877875597 usec\nrounds: 565"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1665.706607233066,
            "unit": "iter/sec",
            "range": "stddev: 0.000030015903192599063",
            "extra": "mean: 600.3458206010945 usec\nrounds: 1466"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 11902.3525459499,
            "unit": "iter/sec",
            "range": "stddev: 0.000006087934622163667",
            "extra": "mean: 84.01700387712657 usec\nrounds: 1805"
          }
        ]
      }
    ]
  }
}