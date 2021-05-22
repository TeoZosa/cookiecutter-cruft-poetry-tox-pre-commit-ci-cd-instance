window.BENCHMARK_DATA = {
  "lastUpdate": 1621717185774,
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
        "date": 1621717183994,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 941.935250372425,
            "unit": "iter/sec",
            "range": "stddev: 0.00012028464908494668",
            "extra": "mean: 1.0616440987898237 msec\nrounds: 496"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1331.4815411753423,
            "unit": "iter/sec",
            "range": "stddev: 0.00009140706785086357",
            "extra": "mean: 751.043081766847 usec\nrounds: 1064"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8407.400314666123,
            "unit": "iter/sec",
            "range": "stddev: 0.0000311071074800281",
            "extra": "mean: 118.94283162127653 usec\nrounds: 1461"
          }
        ]
      }
    ]
  }
}