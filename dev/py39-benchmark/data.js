window.BENCHMARK_DATA = {
  "lastUpdate": 1620060268047,
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
          "id": "cc43e982dff6c08de912c76a4cfae76f97549e80",
          "message": ":construction_worker: Include minor versions in Dependabot PR auto-merging\n\nFor `cookiecutter` template.\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@0acfe6b",
          "timestamp": "2021-05-03T16:40:06Z",
          "tree_id": "b55aaf15d9944cb569358ad8e036480d287306a3",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/cc43e982dff6c08de912c76a4cfae76f97549e80"
        },
        "date": 1620060267036,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 981.8812541173188,
            "unit": "iter/sec",
            "range": "stddev: 0.00018357500788495124",
            "extra": "mean: 1.0184530927815396 msec\nrounds: 485"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1404.8862288919465,
            "unit": "iter/sec",
            "range": "stddev: 0.00010938029214895193",
            "extra": "mean: 711.8014109859373 usec\nrounds: 1056"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 9417.221098381498,
            "unit": "iter/sec",
            "range": "stddev: 0.00002482234906754368",
            "extra": "mean: 106.18843813403363 usec\nrounds: 1479"
          }
        ]
      }
    ]
  }
}