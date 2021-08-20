window.BENCHMARK_DATA = {
  "lastUpdate": 1629476460283,
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
        "date": 1629476457801,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 343.9895380145446,
            "unit": "iter/sec",
            "range": "stddev: 0.00018786627480620567",
            "extra": "mean: 2.907065156027268 msec\nrounds: 141"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1003.0772311929658,
            "unit": "iter/sec",
            "range": "stddev: 0.0000890321666332703",
            "extra": "mean: 996.9322091088579 usec\nrounds: 966"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 1996.6369270987577,
            "unit": "iter/sec",
            "range": "stddev: 0.00004768619315570674",
            "extra": "mean: 500.84218438905884 usec\nrounds: 884"
          }
        ]
      }
    ]
  }
}