window.BENCHMARK_DATA = {
  "lastUpdate": 1621719081894,
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
        "date": 1621719080117,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1002.2291137674204,
            "unit": "iter/sec",
            "range": "stddev: 0.00017552489980539592",
            "extra": "mean: 997.7758441290524 usec\nrounds: 494"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1506.661448170857,
            "unit": "iter/sec",
            "range": "stddev: 0.00013650471274689156",
            "extra": "mean: 663.7191130190776 usec\nrounds: 1398"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 9324.115591202866,
            "unit": "iter/sec",
            "range": "stddev: 0.00003878176328009688",
            "extra": "mean: 107.24877766889567 usec\nrounds: 2051"
          }
        ]
      }
    ]
  }
}