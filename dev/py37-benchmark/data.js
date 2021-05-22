window.BENCHMARK_DATA = {
  "lastUpdate": 1621652195650,
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
          "id": "5f71d3ec5162356f79bf5dff1522c86e44265db5",
          "message": ":boom: Enforce type annotations across codebase\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@d36318a",
          "timestamp": "2021-05-22T02:50:35Z",
          "tree_id": "5954f229c68d49ece82eac8d3482b3cc9c1444a4",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/5f71d3ec5162356f79bf5dff1522c86e44265db5"
        },
        "date": 1621652194828,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1234.1083520957432,
            "unit": "iter/sec",
            "range": "stddev: 0.00001685580011579237",
            "extra": "mean: 810.3016224643613 usec\nrounds: 641"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1763.3774348609531,
            "unit": "iter/sec",
            "range": "stddev: 0.000015701143692002295",
            "extra": "mean: 567.0935672820677 usec\nrounds: 1516"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13457.156293037664,
            "unit": "iter/sec",
            "range": "stddev: 0.000005005862563267904",
            "extra": "mean: 74.30990457600397 usec\nrounds: 1792"
          }
        ]
      }
    ]
  }
}