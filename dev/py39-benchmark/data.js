window.BENCHMARK_DATA = {
  "lastUpdate": 1628313789566,
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
        "date": 1628313787304,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1071.3026955008388,
            "unit": "iter/sec",
            "range": "stddev: 0.00001894381079313589",
            "extra": "mean: 933.4429981364842 usec\nrounds: 537"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1573.9612274395786,
            "unit": "iter/sec",
            "range": "stddev: 0.00001951917282051146",
            "extra": "mean: 635.3396656579256 usec\nrounds: 1322"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 12600.743926568637,
            "unit": "iter/sec",
            "range": "stddev: 0.000005674302715285745",
            "extra": "mean: 79.36039378528298 usec\nrounds: 1770"
          }
        ]
      }
    ]
  }
}