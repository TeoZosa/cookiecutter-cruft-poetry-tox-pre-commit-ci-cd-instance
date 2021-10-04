window.BENCHMARK_DATA = {
  "lastUpdate": 1633354946954,
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
        "date": 1633123057058,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 288.842968047427,
            "unit": "iter/sec",
            "range": "stddev: 0.0005040435216877879",
            "extra": "mean: 3.462088783950605 msec\nrounds: 324"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 858.6841405828465,
            "unit": "iter/sec",
            "range": "stddev: 0.00018906740463795328",
            "extra": "mean: 1.1645725741728885 msec\nrounds: 937"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1719.4351643525135,
            "unit": "iter/sec",
            "range": "stddev: 0.00009634922550437933",
            "extra": "mean: 581.5863376137065 usec\nrounds: 1869"
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
        "date": 1633354944374,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 269.57841486822605,
            "unit": "iter/sec",
            "range": "stddev: 0.00022242096249935168",
            "extra": "mean: 3.709495808441544 msec\nrounds: 308"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 781.8178620443452,
            "unit": "iter/sec",
            "range": "stddev: 0.00014551933689667043",
            "extra": "mean: 1.279070290598297 msec\nrounds: 936"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1583.0693373376641,
            "unit": "iter/sec",
            "range": "stddev: 0.00007690948731909058",
            "extra": "mean: 631.6842708113819 usec\nrounds: 1898"
          }
        ]
      }
    ]
  }
}