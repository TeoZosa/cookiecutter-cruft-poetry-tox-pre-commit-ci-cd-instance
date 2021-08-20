window.BENCHMARK_DATA = {
  "lastUpdate": 1629476501426,
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
          "id": "12785a76f60117e8b0dbc2a43e0db7d647e063e9",
          "message": "Merge pull request #295 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/docs/poetry-1.1.8\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@e2baf71",
          "timestamp": "2021-08-20T15:27:15Z",
          "tree_id": "486d2eea2e0740cef0502bf9004ee910301efc77"
        },
        "date": 1629476499277,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 337.1215363830704,
            "unit": "iter/sec",
            "range": "stddev: 0.00020465433296298522",
            "extra": "mean: 2.9662892816900976 msec\nrounds: 142"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1029.1041648504536,
            "unit": "iter/sec",
            "range": "stddev: 0.00011166954753589562",
            "extra": "mean: 971.7189320143476 usec\nrounds: 809"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2247.145819265412,
            "unit": "iter/sec",
            "range": "stddev: 0.000058320143065547626",
            "extra": "mean: 445.0089493199415 usec\nrounds: 809"
          }
        ]
      }
    ]
  }
}