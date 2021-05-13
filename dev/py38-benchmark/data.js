window.BENCHMARK_DATA = {
  "lastUpdate": 1620922107302,
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
        "date": 1620922105432,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 981.8998404169672,
            "unit": "iter/sec",
            "range": "stddev: 0.00024258731244623227",
            "extra": "mean: 1.0184338145684457 msec\nrounds: 453"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1380.107686955962,
            "unit": "iter/sec",
            "range": "stddev: 0.00017490123240618662",
            "extra": "mean: 724.5811391759237 usec\nrounds: 970"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8628.895016169798,
            "unit": "iter/sec",
            "range": "stddev: 0.00004632518492793577",
            "extra": "mean: 115.88969365441196 usec\nrounds: 1655"
          }
        ]
      }
    ]
  }
}