window.BENCHMARK_DATA = {
  "lastUpdate": 1621487466892,
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
          "id": "57510490247a21f8d5fa3c7c47d784bada3b8a9c",
          "message": "Merge pull request #173 from TeoZosa/make-package-support-conditionally-included\n\n✨ Make Package Support Conditionally Included\n\nOriginal-Commit: TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd@e25e61f",
          "timestamp": "2021-05-20T05:04:49Z",
          "tree_id": "12f75f85fa33b76e9cd7b5ccd2004a35ec5e4ad3",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd-instance/commit/57510490247a21f8d5fa3c7c47d784bada3b8a9c"
        },
        "date": 1621487463552,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_main.py::test_main_succeeds",
            "value": 1039.5786439824383,
            "unit": "iter/sec",
            "range": "stddev: 0.00014572325670716619",
            "extra": "mean: 961.9281867595706 usec\nrounds: 589"
          },
          {
            "name": "tests/test_main.py::test_version_option",
            "value": 1479.034120562496,
            "unit": "iter/sec",
            "range": "stddev: 0.00010987761336203291",
            "extra": "mean: 676.1169239420162 usec\nrounds: 1249"
          },
          {
            "name": "tests/test_main.py::test_version_callback",
            "value": 10105.755971641505,
            "unit": "iter/sec",
            "range": "stddev: 0.000037376473551922735",
            "extra": "mean: 98.95350756600224 usec\nrounds: 1982"
          }
        ]
      }
    ]
  }
}