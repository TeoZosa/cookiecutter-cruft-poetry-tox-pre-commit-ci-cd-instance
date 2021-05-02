window.BENCHMARK_DATA = {
  "lastUpdate": 1619996263625,
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
        "date": 1619996262539,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1030.8950952612374,
            "unit": "iter/sec",
            "range": "stddev: 0.00003907099041405898",
            "extra": "mean: 970.0308058470213 usec\nrounds: 479"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1688.5145654161945,
            "unit": "iter/sec",
            "range": "stddev: 0.00006434997906120654",
            "extra": "mean: 592.2365258090116 usec\nrounds: 1143"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 14524.617971337542,
            "unit": "iter/sec",
            "range": "stddev: 0.000011053775853133203",
            "extra": "mean: 68.84862665395887 usec\nrounds: 1966"
          }
        ]
      }
    ]
  }
}