window.BENCHMARK_DATA = {
  "lastUpdate": 1621721039014,
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
          "id": "bbbd42e917009752a28cd14701a2990737c9ff06",
          "message": ":art: Trim whitespace in \"verify-user-install\" job render template block\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@25be440",
          "timestamp": "2021-05-22T21:57:45Z",
          "tree_id": "2765b2bdea8d6b67fe8710e25a08896d047b455f",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/bbbd42e917009752a28cd14701a2990737c9ff06"
        },
        "date": 1621721037302,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1088.4897034317698,
            "unit": "iter/sec",
            "range": "stddev: 0.00013273456893523887",
            "extra": "mean: 918.7041428570419 usec\nrounds: 553"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1507.53170030302,
            "unit": "iter/sec",
            "range": "stddev: 0.00010692602075238562",
            "extra": "mean: 663.3359681915782 usec\nrounds: 1509"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 9341.788003093368,
            "unit": "iter/sec",
            "range": "stddev: 0.000027583970807526636",
            "extra": "mean: 107.04588882437362 usec\nrounds: 1745"
          }
        ]
      }
    ]
  }
}