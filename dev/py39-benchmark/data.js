window.BENCHMARK_DATA = {
  "lastUpdate": 1631546028863,
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
          "id": "fcc7727ab446133104b7dbbe095d3320c4b52f42",
          "message": "Merge pull request #329 from TeoZosa/dependabot/pip/hypothesis-6.21.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@c25f26a",
          "timestamp": "2021-09-13T14:20:45Z",
          "tree_id": "accf806f68780b5fbcde42ab43d478f61f3d6517"
        },
        "date": 1631546025947,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 226.6563305496968,
            "unit": "iter/sec",
            "range": "stddev: 0.0017024075584981333",
            "extra": "mean: 4.411965893803877 msec\nrounds: 113"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 766.4634611152477,
            "unit": "iter/sec",
            "range": "stddev: 0.00017369199116473431",
            "extra": "mean: 1.3046936360735886 msec\nrounds: 632"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1634.5889559960217,
            "unit": "iter/sec",
            "range": "stddev: 0.000056120038206459174",
            "extra": "mean: 611.7745971131068 usec\nrounds: 762"
          }
        ]
      }
    ]
  }
}