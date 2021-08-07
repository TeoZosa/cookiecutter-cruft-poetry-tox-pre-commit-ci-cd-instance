window.BENCHMARK_DATA = {
  "lastUpdate": 1628313725349,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa"
          },
          "committer": {
            "email": "action@github.com",
            "name": "GitHub Action"
          },
          "id": "77a2f03ddfdd0cd713c6b3e8cffa4cb5f2e245cc",
          "message": "Merge pull request #273 from TeoZosa/migrate-packaging-from-pure-python-to-mypyc-compiled-platform-specific-packages\n\n📦⚡️Compile Package Modules as C-Extensions via Mypyc\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@1d32e0f",
          "timestamp": "2021-08-07T05:14:34Z",
          "tree_id": "24a8663a507daca269767d6c6c38391aa1494f64"
        },
        "date": 1628313723747,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1256.2038498630386,
            "unit": "iter/sec",
            "range": "stddev: 0.000017149274577607658",
            "extra": "mean: 796.0491444991416 usec\nrounds: 609"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1850.8850791508453,
            "unit": "iter/sec",
            "range": "stddev: 0.00001532018168289051",
            "extra": "mean: 540.2820581701285 usec\nrounds: 1530"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 13503.891188425718,
            "unit": "iter/sec",
            "range": "stddev: 0.000004943586943060981",
            "extra": "mean: 74.05272939825724 usec\nrounds: 1796"
          }
        ]
      }
    ]
  }
}