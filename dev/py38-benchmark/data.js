window.BENCHMARK_DATA = {
  "lastUpdate": 1629476026275,
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
          "id": "41f509fa6ed8ac33eed52fba1ea088069e5fe914",
          "message": "Merge pull request #292 from TeoZosa/dependabot/pip/docs/poetry-1.1.8\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@7b3bb9a",
          "timestamp": "2021-08-20T15:17:58Z",
          "tree_id": "f0493067023493cd3cb5bbd0e7a966e9afbf17de"
        },
        "date": 1629476024332,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 412.76681733288075,
            "unit": "iter/sec",
            "range": "stddev: 0.000049882828200123575",
            "extra": "mean: 2.422675365383206 msec\nrounds: 156"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1202.355543164168,
            "unit": "iter/sec",
            "range": "stddev: 0.00001822418833034956",
            "extra": "mean: 831.7007441645416 usec\nrounds: 1071"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2479.0811345217576,
            "unit": "iter/sec",
            "range": "stddev: 0.000013107896051655475",
            "extra": "mean: 403.3752611299312 usec\nrounds: 831"
          }
        ]
      }
    ]
  }
}