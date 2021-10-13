window.BENCHMARK_DATA = {
  "lastUpdate": 1634133706527,
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
        "date": 1634061694456,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 272.36430087062735,
            "unit": "iter/sec",
            "range": "stddev: 0.0009851148988519443",
            "extra": "mean: 3.6715531250000297 msec\nrounds: 320"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 853.1103690297111,
            "unit": "iter/sec",
            "range": "stddev: 0.00023771851155465624",
            "extra": "mean: 1.172181274900403 msec\nrounds: 1004"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1635.1990123830503,
            "unit": "iter/sec",
            "range": "stddev: 0.0000886525773012531",
            "extra": "mean: 611.5463576159175 usec\nrounds: 1812"
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
        "date": 1634133703228,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 307.78472868590484,
            "unit": "iter/sec",
            "range": "stddev: 0.0001593809190688477",
            "extra": "mean: 3.2490240963855705 msec\nrounds: 332"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 950.2113958786613,
            "unit": "iter/sec",
            "range": "stddev: 0.00003283454656496933",
            "extra": "mean: 1.0523973973973435 msec\nrounds: 999"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1769.300307717342,
            "unit": "iter/sec",
            "range": "stddev: 0.000021723263021382393",
            "extra": "mean: 565.195176668537 usec\nrounds: 1783"
          }
        ]
      }
    ]
  }
}