window.BENCHMARK_DATA = {
  "lastUpdate": 1629127454599,
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
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "0174118eea685e1cf21a721e5c5623e51aa0b61f",
          "message": "Merge pull request #163 from TeoZosa/dependabot/pip/hypothesis-6.14.7",
          "timestamp": "2021-08-16T14:00:47Z",
          "tree_id": "0c11a3eb1bbb522902f8b326ef2ef1bcbc59c25d"
        },
        "date": 1629127452903,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 300.85268638113706,
            "unit": "iter/sec",
            "range": "stddev: 0.0002136362483111288",
            "extra": "mean: 3.323885892556545 msec\nrounds: 121"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 878.4342533145186,
            "unit": "iter/sec",
            "range": "stddev: 0.00018602837854280908",
            "extra": "mean: 1.1383891238607649 msec\nrounds: 767"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1725.3783016022571,
            "unit": "iter/sec",
            "range": "stddev: 0.00016925560833952062",
            "extra": "mean: 579.5830393087468 usec\nrounds: 636"
          }
        ]
      }
    ]
  }
}