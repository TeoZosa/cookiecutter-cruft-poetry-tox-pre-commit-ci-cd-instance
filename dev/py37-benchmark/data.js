window.BENCHMARK_DATA = {
  "lastUpdate": 1613078154544,
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
        "date": 1613078153518,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 956.8472482106175,
            "unit": "iter/sec",
            "range": "stddev: 0.000053017267802112894",
            "extra": "mean: 1.045098893130624 msec\nrounds: 524"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1291.332701763642,
            "unit": "iter/sec",
            "range": "stddev: 0.0001296903195910144",
            "extra": "mean: 774.3937705861911 usec\nrounds: 1190"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 8546.486192810087,
            "unit": "iter/sec",
            "range": "stddev: 0.00002014291955118716",
            "extra": "mean: 117.0071509436558 usec\nrounds: 1802"
          }
        ]
      }
    ]
  }
}