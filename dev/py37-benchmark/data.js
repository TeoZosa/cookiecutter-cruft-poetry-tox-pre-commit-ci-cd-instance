window.BENCHMARK_DATA = {
  "lastUpdate": 1629475723351,
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
          "id": "73740242b9a4650060563c0b5aa633609bea9de9",
          "message": "Merge pull request #177 from TeoZosa/dependabot/pip/dot-github/workflows/poetry-1.1.8",
          "timestamp": "2021-08-20T14:21:08Z",
          "tree_id": "1146e88bf06014b1d07326d4a83f9b9a63410161"
        },
        "date": 1629475721182,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 304.8150940545951,
            "unit": "iter/sec",
            "range": "stddev: 0.0003376614997422594",
            "extra": "mean: 3.2806774320069962 msec\nrounds: 125"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 892.5695039471743,
            "unit": "iter/sec",
            "range": "stddev: 0.0003465256813348013",
            "extra": "mean: 1.1203609305244466 msec\nrounds: 878"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1918.581794730785,
            "unit": "iter/sec",
            "range": "stddev: 0.0000747353884303238",
            "extra": "mean: 521.2183305118455 usec\nrounds: 708"
          }
        ]
      }
    ]
  }
}