window.BENCHMARK_DATA = {
  "lastUpdate": 1621715032212,
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
          "id": "2ee90c3b91895f34bda7e49da07a7653c3ca9f6f",
          "message": ":memo: :cookie: Update project preamble\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@f047862",
          "timestamp": "2021-05-22T20:16:16Z",
          "tree_id": "091aff1dd75d3855bcaa682ff11b2b884ee605d0",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/2ee90c3b91895f34bda7e49da07a7653c3ca9f6f"
        },
        "date": 1621715030891,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 858.9597854406691,
            "unit": "iter/sec",
            "range": "stddev: 0.0003582069825260603",
            "extra": "mean: 1.1641988565122097 msec\nrounds: 453"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1297.2587408419529,
            "unit": "iter/sec",
            "range": "stddev: 0.00010103125027948667",
            "extra": "mean: 770.8562436441748 usec\nrounds: 1141"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8284.006763053418,
            "unit": "iter/sec",
            "range": "stddev: 0.00011706825473299514",
            "extra": "mean: 120.7145320619473 usec\nrounds: 1622"
          }
        ]
      }
    ]
  }
}