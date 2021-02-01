window.BENCHMARK_DATA = {
  "lastUpdate": 1612201287611,
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
          "id": "63a21db71185442eed99e81ad2cb716480fa2a10",
          "message": "Merge pull request #57 from TeoZosa/add-performance-testing-component\n\n✨ Add Performance Testing Component\n\nCloses RND-877.\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@5499369",
          "timestamp": "2021-02-01T17:36:52Z",
          "tree_id": "ef2c9b1bc1b0d02d9d0c02e02efc161bf39e39cd",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/63a21db71185442eed99e81ad2cb716480fa2a10"
        },
        "date": 1612201286266,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1089.48774487836,
            "unit": "iter/sec",
            "range": "stddev: 0.000017633127318153767",
            "extra": "mean: 917.8625502681986 usec\nrounds: 567"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1569.2657839166732,
            "unit": "iter/sec",
            "range": "stddev: 0.000029199122398787194",
            "extra": "mean: 637.2406830308481 usec\nrounds: 1344"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13099.777182283902,
            "unit": "iter/sec",
            "range": "stddev: 0.00001144959229578282",
            "extra": "mean: 76.33717628055511 usec\nrounds: 1872"
          }
        ]
      }
    ]
  }
}