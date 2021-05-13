window.BENCHMARK_DATA = {
  "lastUpdate": 1620874059126,
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
        "date": 1620874055880,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 924.1890459167706,
            "unit": "iter/sec",
            "range": "stddev: 0.00007381862964264956",
            "extra": "mean: 1.0820297042235845 msec\nrounds: 497"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1317.1240803948551,
            "unit": "iter/sec",
            "range": "stddev: 0.00008952183472912329",
            "extra": "mean: 759.2299122647688 usec\nrounds: 1117"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 7989.372089821573,
            "unit": "iter/sec",
            "range": "stddev: 0.000032862271857133245",
            "extra": "mean: 125.16628200030837 usec\nrounds: 1578"
          }
        ]
      }
    ]
  }
}