window.BENCHMARK_DATA = {
  "lastUpdate": 1621717115412,
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
          "id": "27471e80579f02695689ed6bb8a8a6b57af63cb0",
          "message": ":construction_worker: Whitelist line length for `yamllint` if testing\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@6f8e289",
          "timestamp": "2021-05-22T20:52:38Z",
          "tree_id": "eacbb0627b8ac73848e4b8bc3f9924ff0cc3bdeb",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/27471e80579f02695689ed6bb8a8a6b57af63cb0"
        },
        "date": 1621717114183,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1228.1347954788555,
            "unit": "iter/sec",
            "range": "stddev: 0.000014943408927372108",
            "extra": "mean: 814.242869497151 usec\nrounds: 636"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1770.0418574973496,
            "unit": "iter/sec",
            "range": "stddev: 0.000015989587009290018",
            "extra": "mean: 564.9583911048823 usec\nrounds: 1529"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13392.488244707825,
            "unit": "iter/sec",
            "range": "stddev: 0.000004960403106937",
            "extra": "mean: 74.66872337148848 usec\nrounds: 1934"
          }
        ]
      }
    ]
  }
}