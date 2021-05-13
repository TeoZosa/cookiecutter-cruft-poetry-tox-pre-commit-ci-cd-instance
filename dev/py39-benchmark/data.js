window.BENCHMARK_DATA = {
  "lastUpdate": 1620874004684,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action",
            "username": "actions-user"
          },
          "distinct": true,
          "id": "eab646aad5da7d0af68069fe86bd55ce890865aa",
          "message": "Merge pull request #168 from TeoZosa/add-jupyter-notebook-tooling\n\n✨ Add Jupyter Notebook Tooling\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@b546618",
          "timestamp": "2021-05-13T02:41:41Z",
          "tree_id": "a222a703a825a7eacd19d36856b4fbb0da92e476",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/eab646aad5da7d0af68069fe86bd55ce890865aa"
        },
        "date": 1620874001569,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 893.3563408383793,
            "unit": "iter/sec",
            "range": "stddev: 0.0005086845864782516",
            "extra": "mean: 1.1193741559628265 msec\nrounds: 327"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1273.2896535158118,
            "unit": "iter/sec",
            "range": "stddev: 0.0004871508193311842",
            "extra": "mean: 785.3672549987323 usec\nrounds: 600"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 9739.753639009086,
            "unit": "iter/sec",
            "range": "stddev: 0.00006538049790917926",
            "extra": "mean: 102.6720014759777 usec\nrounds: 2033"
          }
        ]
      }
    ]
  }
}