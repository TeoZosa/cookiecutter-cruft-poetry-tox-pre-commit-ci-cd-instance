window.BENCHMARK_DATA = {
  "lastUpdate": 1620922117400,
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
        "date": 1620922115566,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 904.614724039738,
            "unit": "iter/sec",
            "range": "stddev: 0.00007344140903482157",
            "extra": "mean: 1.1054429840963673 msec\nrounds: 503"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1221.2835891192083,
            "unit": "iter/sec",
            "range": "stddev: 0.00008868902888575421",
            "extra": "mean: 818.8106422695827 usec\nrounds: 1093"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8184.238108452716,
            "unit": "iter/sec",
            "range": "stddev: 0.00003619959689559708",
            "extra": "mean: 122.18608338963107 usec\nrounds: 1487"
          }
        ]
      }
    ]
  }
}