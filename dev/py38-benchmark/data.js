window.BENCHMARK_DATA = {
  "lastUpdate": 1619996279592,
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
          "id": "ae7479820be70f00a5aa6eaf5830ac8060af7e3b",
          "message": ":construction_worker: Update RTD Python version to `3.9`\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@738e082",
          "timestamp": "2021-05-02T22:53:44Z",
          "tree_id": "8362d3c6070c633ca067c091cac9f84bdbf6bf76",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/ae7479820be70f00a5aa6eaf5830ac8060af7e3b"
        },
        "date": 1619996278501,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1104.8221401703415,
            "unit": "iter/sec",
            "range": "stddev: 0.00003539670481739752",
            "extra": "mean: 905.1230633790702 usec\nrounds: 568"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1657.9531359140497,
            "unit": "iter/sec",
            "range": "stddev: 0.000041286699908037374",
            "extra": "mean: 603.1533571958823 usec\nrounds: 1355"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 12323.319353429228,
            "unit": "iter/sec",
            "range": "stddev: 0.000009463748113254168",
            "extra": "mean: 81.14696790047307 usec\nrounds: 1838"
          }
        ]
      }
    ]
  }
}