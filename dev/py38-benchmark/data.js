window.BENCHMARK_DATA = {
  "lastUpdate": 1621453608412,
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
          "id": "f2ab290eaddebe3ce40f40872df8400942e9ab0b",
          "message": ":fire: Remove inactive Dependabot badge\n\nSee: dependabot/dependabot-core#1912\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@ed6b76c",
          "timestamp": "2021-05-19T19:41:18Z",
          "tree_id": "a747307a240e269c83a290ff448f0e45a92108bd",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/f2ab290eaddebe3ce40f40872df8400942e9ab0b"
        },
        "date": 1621453606535,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 956.2861126089085,
            "unit": "iter/sec",
            "range": "stddev: 0.0001856427060392552",
            "extra": "mean: 1.045712142856318 msec\nrounds: 511"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1357.3920452531888,
            "unit": "iter/sec",
            "range": "stddev: 0.00016629369843969714",
            "extra": "mean: 736.7068368324451 usec\nrounds: 1238"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8553.414356172549,
            "unit": "iter/sec",
            "range": "stddev: 0.00003811359328857344",
            "extra": "mean: 116.9123765503483 usec\nrounds: 1774"
          }
        ]
      }
    ]
  }
}