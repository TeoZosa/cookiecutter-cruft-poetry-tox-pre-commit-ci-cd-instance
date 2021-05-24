window.BENCHMARK_DATA = {
  "lastUpdate": 1621814529005,
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
        "date": 1621814527169,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1032.974398850899,
            "unit": "iter/sec",
            "range": "stddev: 0.0001244666617657195",
            "extra": "mean: 968.0782032085399 usec\nrounds: 561"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1364.5976232117864,
            "unit": "iter/sec",
            "range": "stddev: 0.00016117602704565504",
            "extra": "mean: 732.8167534443957 usec\nrounds: 1379"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 9072.076989972911,
            "unit": "iter/sec",
            "range": "stddev: 0.00003257783357048762",
            "extra": "mean: 110.22834143771811 usec\nrounds: 1892"
          }
        ]
      }
    ]
  }
}