window.BENCHMARK_DATA = {
  "lastUpdate": 1629474391508,
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
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "c5da05d8e128d9d0f955793bdbe3e3c5bfbbe2e6",
          "message": "Merge pull request #296 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/dot-github/workflows/poetry-1.1.8\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@63a8eaf",
          "timestamp": "2021-08-20T14:44:15Z",
          "tree_id": "8061584b379611f66e70dffe3a1d1b0a59ce336b"
        },
        "date": 1629474389571,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 354.87074130726,
            "unit": "iter/sec",
            "range": "stddev: 0.000028327166160880118",
            "extra": "mean: 2.817927441175444 msec\nrounds: 136"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1016.2577895177062,
            "unit": "iter/sec",
            "range": "stddev: 0.000027447734933880294",
            "extra": "mean: 984.0022977581095 usec\nrounds: 937"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2145.087918655262,
            "unit": "iter/sec",
            "range": "stddev: 0.000012735257466315795",
            "extra": "mean: 466.18135849037446 usec\nrounds: 795"
          }
        ]
      }
    ]
  }
}