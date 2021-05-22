window.BENCHMARK_DATA = {
  "lastUpdate": 1621719063193,
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
          "id": "58ae380593a9d270009f32cce8832f85b626b067",
          "message": ":construction_worker: Allow test instance static analysis job to fail\n\nRecent updates correct erroneous CI errors from linting/code-formatting\ntools when applied to a newly initialized project (viz. line lengths\nthat were too long following project name substitution).\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@cbff5fe",
          "timestamp": "2021-05-22T21:24:37Z",
          "tree_id": "b7582ac3716f684570d7833f28c418416fce7cdf",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/58ae380593a9d270009f32cce8832f85b626b067"
        },
        "date": 1621719061312,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1112.7122315357792,
            "unit": "iter/sec",
            "range": "stddev: 0.000036640931079372444",
            "extra": "mean: 898.7049586215006 usec\nrounds: 580"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1637.9208143738172,
            "unit": "iter/sec",
            "range": "stddev: 0.000028958436306373713",
            "extra": "mean: 610.5301252809975 usec\nrounds: 1333"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13421.64643920974,
            "unit": "iter/sec",
            "range": "stddev: 0.000006460796034243722",
            "extra": "mean: 74.50650741913594 usec\nrounds: 1752"
          }
        ]
      }
    ]
  }
}