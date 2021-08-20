window.BENCHMARK_DATA = {
  "lastUpdate": 1629475340112,
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
          "id": "243188f4e09a42ff108de395cf714132e2e33e9c",
          "message": "Merge pull request #292 from TeoZosa/dependabot/pip/docs/poetry-1.1.8\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@3741566",
          "timestamp": "2021-08-20T15:04:59Z",
          "tree_id": "f0493067023493cd3cb5bbd0e7a966e9afbf17de"
        },
        "date": 1629475337274,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 278.4446706127709,
            "unit": "iter/sec",
            "range": "stddev: 0.0004974343341411016",
            "extra": "mean: 3.5913777692326025 msec\nrounds: 117"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 813.1125276322931,
            "unit": "iter/sec",
            "range": "stddev: 0.0004511081435621151",
            "extra": "mean: 1.2298420772238075 msec\nrounds: 764"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1571.4737975169512,
            "unit": "iter/sec",
            "range": "stddev: 0.00020846599968009483",
            "extra": "mean: 636.3453221937754 usec\nrounds: 748"
          }
        ]
      }
    ]
  }
}