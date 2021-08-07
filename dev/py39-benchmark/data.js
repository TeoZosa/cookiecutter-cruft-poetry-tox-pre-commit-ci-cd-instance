window.BENCHMARK_DATA = {
  "lastUpdate": 1628356445093,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "4860cbf1a89b2a38626249ad29d340f4cbdf6f2e",
          "message": "Merge pull request #273 from TeoZosa/migrate-packaging-from-pure-python-to-mypyc-compiled-platform-specific-packages\n\n📦⚡️Compile Package Modules as C-Extensions via Mypyc\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@2d0fc19",
          "timestamp": "2021-08-07T17:04:27Z",
          "tree_id": "774a8c143244f4c5d15e27898babc9a4902f6b01"
        },
        "date": 1628356441865,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1016.4045198963533,
            "unit": "iter/sec",
            "range": "stddev: 0.000151784800235867",
            "extra": "mean: 983.8602450350908 usec\nrounds: 453"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1435.386189944437,
            "unit": "iter/sec",
            "range": "stddev: 0.00026492365837364057",
            "extra": "mean: 696.6766205537406 usec\nrounds: 1518"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8848.28088299237,
            "unit": "iter/sec",
            "range": "stddev: 0.00003524003100816061",
            "extra": "mean: 113.01630375705403 usec\nrounds: 1837"
          }
        ]
      }
    ]
  }
}