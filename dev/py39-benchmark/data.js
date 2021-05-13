window.BENCHMARK_DATA = {
  "lastUpdate": 1620922082327,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action",
            "username": "actions-user"
          },
          "distinct": true,
          "id": "7194f7cc7ad7f95255e10431e32ccb76cd5b5884",
          "message": "Merge pull request #167 from TeoZosa/dependabot/pip/black-21.5b1\n\n⬆️ Bump black from 21.5b0 to 21.5b1\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@4f913ce",
          "timestamp": "2021-05-13T16:02:24Z",
          "tree_id": "fc0320d202bfa604aa4d775285c3c3cf7a2ed6ea",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/7194f7cc7ad7f95255e10431e32ccb76cd5b5884"
        },
        "date": 1620922080434,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1015.6747034494974,
            "unit": "iter/sec",
            "range": "stddev: 0.0001034862902568336",
            "extra": "mean: 984.5672010967074 usec\nrounds: 547"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1436.8617141956604,
            "unit": "iter/sec",
            "range": "stddev: 0.00008846968918945127",
            "extra": "mean: 695.9611980195249 usec\nrounds: 1212"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8813.198549746046,
            "unit": "iter/sec",
            "range": "stddev: 0.00002784408946046289",
            "extra": "mean: 113.46618306117875 usec\nrounds: 1901"
          }
        ]
      }
    ]
  }
}