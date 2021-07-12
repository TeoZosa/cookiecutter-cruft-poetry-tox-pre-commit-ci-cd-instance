window.BENCHMARK_DATA = {
  "lastUpdate": 1626097558099,
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
        "date": 1626097555768,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 935.4065369933476,
            "unit": "iter/sec",
            "range": "stddev: 0.00014010861572835828",
            "extra": "mean: 1.0690538930958013 msec\nrounds: 449"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1296.0345599925356,
            "unit": "iter/sec",
            "range": "stddev: 0.00016514548440601436",
            "extra": "mean: 771.5843626930439 usec\nrounds: 1351"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8215.631440265493,
            "unit": "iter/sec",
            "range": "stddev: 0.000027198910340130954",
            "extra": "mean: 121.71918948297957 usec\nrounds: 1198"
          }
        ]
      }
    ]
  }
}