window.BENCHMARK_DATA = {
  "lastUpdate": 1621814587415,
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
        "date": 1621814585457,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 777.8652218138491,
            "unit": "iter/sec",
            "range": "stddev: 0.0006336947730642393",
            "extra": "mean: 1.2855697516186293 msec\nrounds: 463"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1136.9458968364554,
            "unit": "iter/sec",
            "range": "stddev: 0.00027003924161300556",
            "extra": "mean: 879.5493284091121 usec\nrounds: 1151"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8224.211462272116,
            "unit": "iter/sec",
            "range": "stddev: 0.0000640731457669152",
            "extra": "mean: 121.59220426024022 usec\nrounds: 1831"
          }
        ]
      }
    ]
  }
}