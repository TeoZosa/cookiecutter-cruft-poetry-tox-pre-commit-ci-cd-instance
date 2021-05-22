window.BENCHMARK_DATA = {
  "lastUpdate": 1621719126204,
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
        "date": 1621719124358,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 930.410912290247,
            "unit": "iter/sec",
            "range": "stddev: 0.0003058289284674172",
            "extra": "mean: 1.074793928994724 msec\nrounds: 507"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1270.7968828282437,
            "unit": "iter/sec",
            "range": "stddev: 0.0005393475275192107",
            "extra": "mean: 786.9078162785801 usec\nrounds: 860"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 11331.81569953459,
            "unit": "iter/sec",
            "range": "stddev: 0.000007917436146209117",
            "extra": "mean: 88.24711118811004 usec\nrounds: 1430"
          }
        ]
      }
    ]
  }
}