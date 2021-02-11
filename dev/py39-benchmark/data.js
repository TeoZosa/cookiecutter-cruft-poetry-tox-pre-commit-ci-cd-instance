window.BENCHMARK_DATA = {
  "lastUpdate": 1613078106098,
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
          "id": "b6669625accf26a78f34adbe60f2b396b8cc8bd8",
          "message": ":green_heart: Fix Poetry debug mode bug (temporary)\n\nsee: python-poetry/poetry#3663\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@5244538",
          "timestamp": "2021-02-11T21:11:07Z",
          "tree_id": "c2fe987da3569b9921f94ea845cd030d6c9530a6",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/b6669625accf26a78f34adbe60f2b396b8cc8bd8"
        },
        "date": 1613078104794,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1153.3481366293297,
            "unit": "iter/sec",
            "range": "stddev: 0.00010527069059691566",
            "extra": "mean: 867.040894454045 usec\nrounds: 559"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1762.6883527999996,
            "unit": "iter/sec",
            "range": "stddev: 0.0000673490306436953",
            "extra": "mean: 567.3152593375439 usec\nrounds: 1419"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 15440.328259917027,
            "unit": "iter/sec",
            "range": "stddev: 0.000009207613748672022",
            "extra": "mean: 64.76546244136482 usec\nrounds: 1704"
          }
        ]
      }
    ]
  }
}