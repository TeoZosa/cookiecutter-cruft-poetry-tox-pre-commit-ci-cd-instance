window.BENCHMARK_DATA = {
  "lastUpdate": 1621717157522,
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
        "date": 1621717155638,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1107.3737805316673,
            "unit": "iter/sec",
            "range": "stddev: 0.000036932907507504757",
            "extra": "mean: 903.0374545439252 usec\nrounds: 572"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1629.6496579038117,
            "unit": "iter/sec",
            "range": "stddev: 0.000029468783468607664",
            "extra": "mean: 613.6288220906827 usec\nrounds: 1349"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 12839.426947735314,
            "unit": "iter/sec",
            "range": "stddev: 0.000013327989675179346",
            "extra": "mean: 77.88509596811758 usec\nrounds: 1761"
          }
        ]
      }
    ]
  }
}