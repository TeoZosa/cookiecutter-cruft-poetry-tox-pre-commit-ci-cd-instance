window.BENCHMARK_DATA = {
  "lastUpdate": 1633355754060,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "d7eeca1d9e67b4f46517bd1680a8ad8a1193af48",
          "message": "Merge pull request #362 from TeoZosa/streamline-and-expand-performance-testing-workflow\n\n👷‍♀️ Streamline and Expand Performance Testing\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@587e34c",
          "timestamp": "2021-10-01T21:00:00Z",
          "tree_id": "ea2e1a176cf76eab14a790bf919b66f4f819c49c"
        },
        "date": 1633124233224,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 293.64572526707536,
            "unit": "iter/sec",
            "range": "stddev: 0.0003090201738118391",
            "extra": "mean: 3.4054641833811283 msec\nrounds: 349"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 813.1180824438192,
            "unit": "iter/sec",
            "range": "stddev: 0.0001844282213040794",
            "extra": "mean: 1.2298336755646964 msec\nrounds: 974"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1751.6651336409382,
            "unit": "iter/sec",
            "range": "stddev: 0.00002492842761833058",
            "extra": "mean: 570.8853711790458 usec\nrounds: 1832"
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
          "id": "7d9bcdecca698f0b988fa7e33cf25bd2f133f879",
          "message": "Merge pull request #363 from TeoZosa/dependabot/pip/structlog-sentry-logger-0.11.1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@8bb3f64",
          "timestamp": "2021-10-04T13:20:51Z",
          "tree_id": "c832f23ee0ee4150e089be6ed5cfdd673df85835"
        },
        "date": 1633355740105,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 267.70481306399427,
            "unit": "iter/sec",
            "range": "stddev: 0.00041395501221052353",
            "extra": "mean: 3.735457680250792 msec\nrounds: 319"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 836.0043970274049,
            "unit": "iter/sec",
            "range": "stddev: 0.00015517134062949242",
            "extra": "mean: 1.1961659574467753 msec\nrounds: 940"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1681.9224758499904,
            "unit": "iter/sec",
            "range": "stddev: 0.00006010735501551741",
            "extra": "mean: 594.5577244840798 usec\nrounds: 1793"
          }
        ]
      }
    ]
  }
}