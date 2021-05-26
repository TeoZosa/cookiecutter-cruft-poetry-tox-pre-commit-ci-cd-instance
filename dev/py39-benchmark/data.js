window.BENCHMARK_DATA = {
  "lastUpdate": 1622050560787,
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
          "id": "643d7e32f2c074c180361881da46a69fabe6bae0",
          "message": ":green_heart: Fix Dependabot-merged Reset Instance workflow\n\nsee: dependabot/dependabot-core/issues/3253\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@67d23ab",
          "timestamp": "2021-05-26T17:29:31Z",
          "tree_id": "01287c0f6e9b71cfe03f8c95c7f86c9f55d23d0f",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/643d7e32f2c074c180361881da46a69fabe6bae0"
        },
        "date": 1622050559159,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1073.1554786690758,
            "unit": "iter/sec",
            "range": "stddev: 0.00008440105618697445",
            "extra": "mean: 931.8314259926221 usec\nrounds: 554"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1496.1086590450973,
            "unit": "iter/sec",
            "range": "stddev: 0.00007240656587256466",
            "extra": "mean: 668.4006498821132 usec\nrounds: 1271"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 9693.39787431984,
            "unit": "iter/sec",
            "range": "stddev: 0.00002129403842805818",
            "extra": "mean: 103.16299949362877 usec\nrounds: 1978"
          }
        ]
      }
    ]
  }
}