window.BENCHMARK_DATA = {
  "lastUpdate": 1621725299287,
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
          "id": "f8e1c9e851e8ed587e55682aae268d5fe1ec9b39",
          "message": ":art: Reorganize dependencies into respective sections\n\nMirroring metaproject README organization.\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@354d29b",
          "timestamp": "2021-05-22T23:08:28Z",
          "tree_id": "c518fccdb54c6e35c7be412f9acbb72c93f79b19",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/f8e1c9e851e8ed587e55682aae268d5fe1ec9b39"
        },
        "date": 1621725298083,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1089.4438453804169,
            "unit": "iter/sec",
            "range": "stddev: 0.000022083962071493128",
            "extra": "mean: 917.8995358414417 usec\nrounds: 558"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1600.737001323515,
            "unit": "iter/sec",
            "range": "stddev: 0.00001982645799390883",
            "extra": "mean: 624.7122414070418 usec\nrounds: 1338"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 11165.810212126484,
            "unit": "iter/sec",
            "range": "stddev: 0.00011182956911390207",
            "extra": "mean: 89.55910775860787 usec\nrounds: 1624"
          }
        ]
      }
    ]
  }
}