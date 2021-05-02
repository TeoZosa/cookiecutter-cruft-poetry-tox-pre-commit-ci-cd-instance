window.BENCHMARK_DATA = {
  "lastUpdate": 1619995855785,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action",
            "username": "actions-user"
          },
          "distinct": true,
          "id": "31779f21a839e25b398d88c4eef6948e105f33a0",
          "message": ":bug: Fix `clean-requirements` target\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@ccde155",
          "timestamp": "2021-05-02T22:46:42Z",
          "tree_id": "21a57077159b1bb9a45001fec19eaa306be4fa28",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/31779f21a839e25b398d88c4eef6948e105f33a0"
        },
        "date": 1619995854086,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 987.6500540755806,
            "unit": "iter/sec",
            "range": "stddev: 0.00011670899082776834",
            "extra": "mean: 1.0125043742704785 msec\nrounds: 513"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1361.5242887696036,
            "unit": "iter/sec",
            "range": "stddev: 0.00017396025383043114",
            "extra": "mean: 734.4709222218066 usec\nrounds: 1080"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8972.13251824953,
            "unit": "iter/sec",
            "range": "stddev: 0.00001426844776454271",
            "extra": "mean: 111.45622269465775 usec\nrounds: 1886"
          }
        ]
      }
    ]
  }
}