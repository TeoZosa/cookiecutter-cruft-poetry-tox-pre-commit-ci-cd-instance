window.BENCHMARK_DATA = {
  "lastUpdate": 1621709998089,
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
          "id": "025e016fc528333f665aab6a60d4e39396c7fe19",
          "message": ":memo: :cookie: Add new feature documentation\n\nSee Also:\n    - #168\n    - #172\n    - #173\n    - #175\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@608cd89",
          "timestamp": "2021-05-22T18:52:40Z",
          "tree_id": "7732d3ddd317f806b529bfb054dd197afedef9f7",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/025e016fc528333f665aab6a60d4e39396c7fe19"
        },
        "date": 1621709996336,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 981.9200871940733,
            "unit": "iter/sec",
            "range": "stddev: 0.00015467791708870138",
            "extra": "mean: 1.0184128148937168 msec\nrounds: 470"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1342.355083094805,
            "unit": "iter/sec",
            "range": "stddev: 0.00013730637654193946",
            "extra": "mean: 744.9593722210192 usec\nrounds: 1080"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8316.736872662801,
            "unit": "iter/sec",
            "range": "stddev: 0.00003832959795494911",
            "extra": "mean: 120.23946594811844 usec\nrounds: 1762"
          }
        ]
      }
    ]
  }
}