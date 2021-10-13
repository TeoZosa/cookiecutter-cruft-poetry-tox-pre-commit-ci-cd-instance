window.BENCHMARK_DATA = {
  "lastUpdate": 1634133361969,
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
        "date": 1634061615319,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 283.0689708780464,
            "unit": "iter/sec",
            "range": "stddev: 0.00039605693122480033",
            "extra": "mean: 3.5327079365079066 msec\nrounds: 315"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 872.8888653767433,
            "unit": "iter/sec",
            "range": "stddev: 0.00007634167525369921",
            "extra": "mean: 1.1456212121211957 msec\nrounds: 924"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1627.0033107732704,
            "unit": "iter/sec",
            "range": "stddev: 0.00007198354273490127",
            "extra": "mean: 614.6268992684023 usec\nrounds: 1777"
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
        "date": 1634133355551,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 293.3501138235456,
            "unit": "iter/sec",
            "range": "stddev: 0.00029942665447013384",
            "extra": "mean: 3.4088958990536296 msec\nrounds: 317"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 880.4985799333781,
            "unit": "iter/sec",
            "range": "stddev: 0.00007788649418833617",
            "extra": "mean: 1.1357201735358435 msec\nrounds: 922"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1681.3200317272624,
            "unit": "iter/sec",
            "range": "stddev: 0.00003906025671299804",
            "extra": "mean: 594.7707641195917 usec\nrounds: 1806"
          }
        ]
      }
    ]
  }
}