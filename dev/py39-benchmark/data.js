window.BENCHMARK_DATA = {
  "lastUpdate": 1628357077440,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "57ae9458320c6fe1d2607a9f3ec39626dbbec470",
          "message": ":bookmark: Bump version number to `0.4.0`\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@3d14fa0",
          "timestamp": "2021-08-07T17:14:53Z",
          "tree_id": "a49d4bf3f71fdad3b027cc1c379ad3f409bc9f22"
        },
        "date": 1628357075228,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1032.4490976383004,
            "unit": "iter/sec",
            "range": "stddev: 0.0001547863720512747",
            "extra": "mean: 968.570753064217 usec\nrounds: 571"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1466.3959562536595,
            "unit": "iter/sec",
            "range": "stddev: 0.0000771849944844692",
            "extra": "mean: 681.9440518335815 usec\nrounds: 1254"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 9855.779537979952,
            "unit": "iter/sec",
            "range": "stddev: 0.000026296202886995528",
            "extra": "mean: 101.46330852333175 usec\nrounds: 1760"
          }
        ]
      }
    ]
  }
}