window.BENCHMARK_DATA = {
  "lastUpdate": 1631545947565,
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
        "date": 1631545944665,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 305.27186344510534,
            "unit": "iter/sec",
            "range": "stddev: 0.00005214996626283829",
            "extra": "mean: 3.2757686499981746 msec\nrounds: 120"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 885.8275773875417,
            "unit": "iter/sec",
            "range": "stddev: 0.00002834094838346262",
            "extra": "mean: 1.128887862070373 msec\nrounds: 783"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1866.7193878351675,
            "unit": "iter/sec",
            "range": "stddev: 0.000023282723258407847",
            "extra": "mean: 535.6991557042213 usec\nrounds: 745"
          }
        ]
      }
    ]
  }
}