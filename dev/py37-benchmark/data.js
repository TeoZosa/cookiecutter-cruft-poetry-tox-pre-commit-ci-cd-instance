window.BENCHMARK_DATA = {
  "lastUpdate": 1620874035568,
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
        "date": 1620874034295,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 877.1861299243616,
            "unit": "iter/sec",
            "range": "stddev: 0.000365187877535973",
            "extra": "mean: 1.1400089056198692 msec\nrounds: 498"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1193.6744137559829,
            "unit": "iter/sec",
            "range": "stddev: 0.0002840495377612401",
            "extra": "mean: 837.7493799615153 usec\nrounds: 1058"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 7482.809029653558,
            "unit": "iter/sec",
            "range": "stddev: 0.00011640173258796047",
            "extra": "mean: 133.63965270757396 usec\nrounds: 1552"
          }
        ]
      }
    ]
  }
}