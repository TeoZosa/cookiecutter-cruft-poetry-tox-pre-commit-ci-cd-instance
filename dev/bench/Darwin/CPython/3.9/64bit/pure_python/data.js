window.BENCHMARK_DATA = {
  "lastUpdate": 1634133988634,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "13a2a5d9efa91bbe55c4495d18a97536657cb76b",
          "message": ":cookie: :art: Remove gratuitous newlines\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@4e4a24f",
          "timestamp": "2021-10-12T17:40:15Z",
          "tree_id": "1858ad76937eb7dc75a59c085dd1f547330f2927"
        },
        "date": 1634061876435,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 268.08449890608193,
            "unit": "iter/sec",
            "range": "stddev: 0.0003676755716666609",
            "extra": "mean: 3.7301671826625458 msec\nrounds: 323"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 838.9911799048377,
            "unit": "iter/sec",
            "range": "stddev: 0.00016827612853782765",
            "extra": "mean: 1.1919076433120843 msec\nrounds: 942"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1685.2139922619824,
            "unit": "iter/sec",
            "range": "stddev: 0.00006761044791812585",
            "extra": "mean: 593.3964497041397 usec\nrounds: 1859"
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
          "id": "231b24f12a51f2a9aa5ec6dcdc6f94cbe7fa30c0",
          "message": "Merge pull request #387 from TeoZosa/dependabot/pip/structlog-sentry-logger-0.12.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@f818a13",
          "timestamp": "2021-10-13T13:33:14Z",
          "tree_id": "c357d6e257253492795e87f59770d70b8c0e54ef"
        },
        "date": 1634133986426,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 288.747763798866,
            "unit": "iter/sec",
            "range": "stddev: 0.000211981132648592",
            "extra": "mean: 3.4632302839116473 msec\nrounds: 317"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 885.5000539938952,
            "unit": "iter/sec",
            "range": "stddev: 0.00006920180374551012",
            "extra": "mean: 1.1293054082714873 msec\nrounds: 943"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1671.9691806820867,
            "unit": "iter/sec",
            "range": "stddev: 0.00007002641613329435",
            "extra": "mean: 598.0971488912528 usec\nrounds: 1894"
          }
        ]
      }
    ]
  }
}