window.BENCHMARK_DATA = {
  "lastUpdate": 1624890603662,
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
          "id": "9c9367fc36269bb461e35ed12857995809fdd1c9",
          "message": "Merge pull request #231 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/dot-github/workflows/pip-21.1.3\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@5bad031",
          "timestamp": "2021-06-28T14:14:40Z",
          "tree_id": "2cb62558eb41e9c0d5f34ed286e39d8c771ae892"
        },
        "date": 1624890600082,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 876.4267547656623,
            "unit": "iter/sec",
            "range": "stddev: 0.00021949195184013944",
            "extra": "mean: 1.1409966600887014 msec\nrounds: 456"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1238.391416614787,
            "unit": "iter/sec",
            "range": "stddev: 0.00018739252461635975",
            "extra": "mean: 807.499136850897 usec\nrounds: 1213"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 7968.423732342378,
            "unit": "iter/sec",
            "range": "stddev: 0.0001094899444034372",
            "extra": "mean: 125.4953342831384 usec\nrounds: 1756"
          }
        ]
      }
    ]
  }
}