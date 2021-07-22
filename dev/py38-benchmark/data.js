window.BENCHMARK_DATA = {
  "lastUpdate": 1626962142243,
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
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "c23907f7a70de5a2161901eec3b532f06499033e",
          "message": "Merge pull request #122 from TeoZosa/dependabot/github_actions/crazy-max/ghaction-github-labeler-3.1.1",
          "timestamp": "2021-07-22T13:49:53Z",
          "tree_id": "883ffcaba695208487677accf3ee8c844974de8d"
        },
        "date": 1626962140864,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1279.8752938189855,
            "unit": "iter/sec",
            "range": "stddev: 0.000015757457128148904",
            "extra": "mean: 781.326122028754 usec\nrounds: 631"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1881.8076907175046,
            "unit": "iter/sec",
            "range": "stddev: 0.00001411009785052325",
            "extra": "mean: 531.4039287504003 usec\nrounds: 1600"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13737.597119510976,
            "unit": "iter/sec",
            "range": "stddev: 0.0000043146384656669955",
            "extra": "mean: 72.7929339680328 usec\nrounds: 1893"
          }
        ]
      }
    ]
  }
}