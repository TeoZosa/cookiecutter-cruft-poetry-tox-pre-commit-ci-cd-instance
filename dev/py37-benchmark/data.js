window.BENCHMARK_DATA = {
  "lastUpdate": 1612201283197,
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
        "date": 1612201281881,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1132.8165906270538,
            "unit": "iter/sec",
            "range": "stddev: 0.00006758121248307294",
            "extra": "mean: 882.7554330277462 usec\nrounds: 545"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1586.5596925274792,
            "unit": "iter/sec",
            "range": "stddev: 0.000053266834801525624",
            "extra": "mean: 630.2945957280331 usec\nrounds: 1311"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13241.916633812041,
            "unit": "iter/sec",
            "range": "stddev: 0.000013165069525259073",
            "extra": "mean: 75.5177688890285 usec\nrounds: 1800"
          }
        ]
      }
    ]
  }
}