window.BENCHMARK_DATA = {
  "lastUpdate": 1629474425871,
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
        "date": 1629474423865,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 396.94002763311886,
            "unit": "iter/sec",
            "range": "stddev: 0.00024238224319391523",
            "extra": "mean: 2.5192722587409944 msec\nrounds: 143"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1044.184363160172,
            "unit": "iter/sec",
            "range": "stddev: 0.00009909015610661021",
            "extra": "mean: 957.6852855501012 usec\nrounds: 879"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 2101.3365066706256,
            "unit": "iter/sec",
            "range": "stddev: 0.00003968487959634087",
            "extra": "mean: 475.8876062094443 usec\nrounds: 805"
          }
        ]
      }
    ]
  }
}