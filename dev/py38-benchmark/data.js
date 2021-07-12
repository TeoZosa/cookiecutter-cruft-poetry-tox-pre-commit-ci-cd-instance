window.BENCHMARK_DATA = {
  "lastUpdate": 1626097466095,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "52ae5daeaa5f9249424120801670aa7de50fc324",
          "message": "Merge pull request #242 from TeoZosa/dependabot/pip/hypothesis-6.14.2\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@9a33ae4",
          "timestamp": "2021-07-12T13:34:24Z",
          "tree_id": "043ea874b3dcf350551f6569b30c020f1749cf19"
        },
        "date": 1626097464550,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1261.383901221617,
            "unit": "iter/sec",
            "range": "stddev: 0.000019985946020912786",
            "extra": "mean: 792.7800561205248 usec\nrounds: 588"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1863.2106784295615,
            "unit": "iter/sec",
            "range": "stddev: 0.000016301218254265736",
            "extra": "mean: 536.7079587815946 usec\nrounds: 1577"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13620.795315866188,
            "unit": "iter/sec",
            "range": "stddev: 0.000004242246631507508",
            "extra": "mean: 73.4171519951665 usec\nrounds: 1829"
          }
        ]
      }
    ]
  }
}