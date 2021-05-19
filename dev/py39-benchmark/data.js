window.BENCHMARK_DATA = {
  "lastUpdate": 1621452212393,
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
          "id": "5283162bd4bcc9730fc2fb6d53494fb16bdc65c7",
          "message": ":memo: Add docstrings to `conftest.py`\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@f5a07b8",
          "timestamp": "2021-05-19T19:17:48Z",
          "tree_id": "9bb456976ce38356f614e5c7790f8d8c2b96955a",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/5283162bd4bcc9730fc2fb6d53494fb16bdc65c7"
        },
        "date": 1621452211030,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 911.2356031004199,
            "unit": "iter/sec",
            "range": "stddev: 0.00014738591751581675",
            "extra": "mean: 1.097411028056372 msec\nrounds: 499"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1279.5262214747697,
            "unit": "iter/sec",
            "range": "stddev: 0.00018212291281071935",
            "extra": "mean: 781.5392785365583 usec\nrounds: 1095"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 9099.611127703392,
            "unit": "iter/sec",
            "range": "stddev: 0.00007605631220231865",
            "extra": "mean: 109.89480604896853 usec\nrounds: 1918"
          }
        ]
      }
    ]
  }
}