window.BENCHMARK_DATA = {
  "lastUpdate": 1629476094097,
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
      },
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
        "date": 1629476091889,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 305.71635232077057,
            "unit": "iter/sec",
            "range": "stddev: 0.00005209251132007214",
            "extra": "mean: 3.271005925619437 msec\nrounds: 121"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 881.6583739602007,
            "unit": "iter/sec",
            "range": "stddev: 0.00005094086743920928",
            "extra": "mean: 1.1342261691546545 msec\nrounds: 804"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1838.9462375359426,
            "unit": "iter/sec",
            "range": "stddev: 0.000020868088274056265",
            "extra": "mean: 543.7896875875659 usec\nrounds: 717"
          }
        ]
      }
    ]
  }
}