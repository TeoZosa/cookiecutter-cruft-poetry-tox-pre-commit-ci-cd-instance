window.BENCHMARK_DATA = {
  "lastUpdate": 1621814523075,
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
          "id": "407fa834a5e7c060fcb37ca8f23da105d734ee35",
          "message": ":recycle: Defer to `get-make-var-%` for `strong-version-tag*` targets\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@85f6783",
          "timestamp": "2021-05-23T23:55:20Z",
          "tree_id": "40836a34204bcfc57fe2fe6842e29bdc4e60e9e4",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/407fa834a5e7c060fcb37ca8f23da105d734ee35"
        },
        "date": 1621814521016,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1051.1450249291029,
            "unit": "iter/sec",
            "range": "stddev: 0.00010082774278574765",
            "extra": "mean: 951.343512344976 usec\nrounds: 486"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1495.8646664352168,
            "unit": "iter/sec",
            "range": "stddev: 0.00008933239173271258",
            "extra": "mean: 668.5096736612492 usec\nrounds: 1382"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8354.069334277316,
            "unit": "iter/sec",
            "range": "stddev: 0.00004997785923020939",
            "extra": "mean: 119.70214275059124 usec\nrounds: 1345"
          }
        ]
      }
    ]
  }
}