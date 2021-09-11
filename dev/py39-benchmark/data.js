window.BENCHMARK_DATA = {
  "lastUpdate": 1631337112680,
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
          "id": "871c129f260e7b40a172c8ed6a5e7f21ab09396d",
          "message": ":rotating_light: Silence spurious missing intra-package imports\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@63a8dd7",
          "timestamp": "2021-09-11T05:04:01Z",
          "tree_id": "0cc3f429e25b8c39ba8fcf0be77c9c23fd20b315"
        },
        "date": 1631337110520,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 320.72915849823414,
            "unit": "iter/sec",
            "range": "stddev: 0.00008133524396581758",
            "extra": "mean: 3.1178954999986566 msec\nrounds: 126"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 903.6839892037134,
            "unit": "iter/sec",
            "range": "stddev: 0.00005379736880485295",
            "extra": "mean: 1.1065815173744042 msec\nrounds: 777"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1980.1725990165653,
            "unit": "iter/sec",
            "range": "stddev: 0.000045853454868590185",
            "extra": "mean: 505.0064830190262 usec\nrounds: 795"
          }
        ]
      }
    ]
  }
}