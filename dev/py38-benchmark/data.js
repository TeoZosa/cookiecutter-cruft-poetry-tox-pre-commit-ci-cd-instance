window.BENCHMARK_DATA = {
  "lastUpdate": 1629474524161,
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
        "date": 1629474521531,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 257.3974149779822,
            "unit": "iter/sec",
            "range": "stddev: 0.000757294439664582",
            "extra": "mean: 3.8850429017927013 msec\nrounds: 112"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 769.1902365360012,
            "unit": "iter/sec",
            "range": "stddev: 0.0003949946074233063",
            "extra": "mean: 1.300068503863798 msec\nrounds: 647"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1609.1955205915997,
            "unit": "iter/sec",
            "range": "stddev: 0.00009322257315995665",
            "extra": "mean: 621.4285257470534 usec\nrounds: 738"
          }
        ]
      }
    ]
  }
}